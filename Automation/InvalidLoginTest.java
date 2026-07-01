package com.futuretransformation.tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;

public class InvalidLoginTest extends BaseTest {

    @Test
    void invalidLogin() throws InterruptedException {

        driver.get("http://localhost:5173/login");

        Thread.sleep(1000);

        driver.findElement(By.id("email"))
                .sendKeys("akshayyelle4@gmail.com");

        driver.findElement(By.id("password"))
                .sendKeys("WrongPassword123");

        driver.findElement(By.id("loginButton"))
                .click();

        Thread.sleep(3000);

        if (driver.getCurrentUrl().contains("/login")) {

            System.out.println("Invalid Login Validation Passed");

        } else {

            System.out.println("Invalid Login Validation Failed");
            System.out.println(driver.getCurrentUrl());

        }

    }
}