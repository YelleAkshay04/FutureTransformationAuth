package com.futuretransformation.tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;

public class RegisterTest extends BaseTest {

    @Test
    void registerUser() throws InterruptedException {

        // Open Register Page
        driver.get("http://localhost:5173/register");

        Thread.sleep(1000);

        // Enter Name
        driver.findElement(By.id("name"))
                .sendKeys("Akshay Yelle");

        Thread.sleep(500);

        // Enter Unique Email
        driver.findElement(By.id("email"))
                .sendKeys("akshayyelle4"
                        + System.currentTimeMillis()
                        + "@gmail.com");

        Thread.sleep(500);

        // Enter Password
        driver.findElement(By.id("password"))
                .sendKeys("Password1234");

        Thread.sleep(500);

        // Confirm Password
        driver.findElement(By.id("confirmPassword"))
                .sendKeys("Password1234");

        Thread.sleep(500);

        // Click Register
        driver.findElement(By.id("registerButton"))
                .click();

        // Wait for redirect
        Thread.sleep(3500);

        if (driver.getCurrentUrl().contains("/login")) {

            System.out.println("Registration Successful");

        } else {

            System.out.println("Registration Failed");

        }
    }

}