package com.futuretransformation.tests;

import org.junit.jupiter.api.Test;

public class DashboardAccessTest extends BaseTest {

    @Test
    void dashboardWithoutLogin() throws InterruptedException {

        // Remove JWT token
        driver.manage().deleteAllCookies();

        driver.get("http://localhost:5173/dashboard");

        Thread.sleep(3000);

        if (driver.getCurrentUrl().contains("/login")) {

            System.out.println("Dashboard Protection Passed");

        } else {

            System.out.println("Dashboard Protection Failed");
            System.out.println(driver.getCurrentUrl());

        }

    }
}