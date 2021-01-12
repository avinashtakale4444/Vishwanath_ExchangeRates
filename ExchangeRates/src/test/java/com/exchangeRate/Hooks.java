package com.exchangeRate;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;

public class Hooks {

    @Before
    public void startTestCase(Scenario scenario) {
        Log.startTestCase(scenario.getName());
    }

    @After
    public void endTestCase(Scenario scenario) {
        Log.endTestCase(scenario.getName());
    }
}
