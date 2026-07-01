package com.futuretransformation.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginResponse {

    private boolean success;

    private int status;

    private String message;

    private String token;

}