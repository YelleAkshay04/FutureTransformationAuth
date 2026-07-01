package com.futuretransformation.tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;

public class DuplicateRegisterTest extends BaseTest {

    @Test
    void duplicateRegistration() throws InterruptedException {

        driver.get("http://localhost:5173/register");

        Thread.sleep(1000);

        driver.findElement(By.id("name"))
                .sendKeys("Akshay");

        driver.findElement(By.id("email"))
                .sendKeys("duplicate@gmail.com");

        driver.findElement(By.id("password"))
                .sendKeys("Password1234");

        driver.findElement(By.id("confirmPassword"))
                .sendKeys("Password1234");

        driver.findElement(By.id("registerButton"))
                .click();

        Thread.sleep(2500);

        driver.get("http://localhost:5173/register");

        Thread.sleep(1000);

        driver.findElement(By.id("name"))
                .sendKeys("Akshay");

        driver.findElement(By.id("email"))
                .sendKeys("duplicate@gmail.com");

        driver.findElement(By.id("password"))
                .sendKeys("Password1234");

        driver.findElement(By.id("confirmPassword"))
                .sendKeys("Password1234");

        driver.findElement(By.id("registerButton"))
                .click();

        Thread.sleep(3000);

        String page = driver.getPageSource();

        if(page.contains("Email already registered")){

            System.out.println("Duplicate Email Validation Passed");

        }else{

            System.out.println("Duplicate Email Validation Failed");

        }

    }

}