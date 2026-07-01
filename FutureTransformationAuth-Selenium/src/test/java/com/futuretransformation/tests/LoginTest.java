package com.futuretransformation.tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;

public class LoginTest extends BaseTest {

    @Test
    void successfulLogin() throws InterruptedException {

        driver.get("http://localhost:5173/login");

        Thread.sleep(1000);

        driver.findElement(By.id("email"))
                .sendKeys("akshayyelle4@gmail.com");

        driver.findElement(By.id("password"))
                .sendKeys("Password1234");

        driver.findElement(By.id("loginButton"))
                .click();

        Thread.sleep(3000);

        if(driver.getCurrentUrl().contains("/dashboard")){

            System.out.println("Login Successful");

        }else{

            System.out.println("Login Failed");
            System.out.println(driver.getCurrentUrl());

        }

    }

}