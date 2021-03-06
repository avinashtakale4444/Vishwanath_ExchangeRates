package com.exchangeRate;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/FeatureFiles",
        glue = "com.exchangeRate",
        plugin = {"pretty", "html:target/Destination"}
)
public class RunnerTest {
}
