package com.futuretransformation.auth.service;

import com.futuretransformation.auth.dto.LoginRequest;
import com.futuretransformation.auth.dto.LoginResponse;
import com.futuretransformation.auth.dto.RegisterRequest;
import com.futuretransformation.auth.dto.RegisterResponse;
import com.futuretransformation.auth.entity.User;
import com.futuretransformation.auth.exception.EmailAlreadyExistsException;
import com.futuretransformation.auth.exception.InvalidCredentialsException;
import com.futuretransformation.auth.exception.PasswordMismatchException;
import com.futuretransformation.auth.jwt.JwtService;
import com.futuretransformation.auth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public RegisterResponse register(RegisterRequest request) {

        String email = request.getEmail().trim().toLowerCase();

        if (userRepository.existsByEmail(email)) {
            throw new EmailAlreadyExistsException("Email already registered.");
        }

        if (!request.getPassword().equals(request.getConfirmPassword())) {
            throw new PasswordMismatchException("Passwords do not match.");
        }

        User user = User.builder()
                .name(request.getName().trim())
                .email(email)
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        userRepository.save(user);

        return new RegisterResponse(
                true,
                201,
                "Registration Successful"
        );
    }

    public LoginResponse login(LoginRequest request) {

        User user = userRepository
                .findByEmail(request.getEmail().toLowerCase().trim())
                .orElseThrow(() ->
                        new InvalidCredentialsException("Invalid Email or Password"));

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            throw new InvalidCredentialsException(
                    "Invalid Email or Password"
            );
        }

        String token = jwtService.generateToken(user.getEmail());

        return new LoginResponse(
                true,
                200,
                "Login Successful",
                token
        );
    }
}