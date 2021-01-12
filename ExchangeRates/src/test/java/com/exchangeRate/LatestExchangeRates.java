package com.exchangeRate;

import io.cucumber.java.Scenario;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.apache.log4j.Logger;
import org.junit.Assert;

public class LatestExchangeRates {

    public String actualURL;
    Response responseOfLatestExchange;
    Logger log = Logger.getLogger("Exchange_Rates");
    @Given("Rates API for Latest Foreign Exchange rates {string}")
    public void rates_API_for_Latest_Foreign_Exchange_rates(String url) {
        actualURL = url;

    }

    @When("The API is available and hit available API {string}")
    public void the_API_is_available_and_hit_available_API(String date) {
        RequestSpecification requestSpecification = RestAssured.given();
        log.debug("Latest exchange Url is present:"+actualURL);
        responseOfLatestExchange = requestSpecification.get(actualURL);
        Assert.assertEquals(responseOfLatestExchange.jsonPath().get("date"), date);
        log.info("Latest exchange Url executed on date:"+date);
    }

    @Then("API should return success status code")
    public void api_should_return_success_status_code() {
        Assert.assertEquals(responseOfLatestExchange.getStatusCode(), 200);
        log.info("Response code returned:"+responseOfLatestExchange.getStatusCode());
        Assert.assertNotNull(responseOfLatestExchange);

    }

    @When("The API is available and hit available API with symbols {string} {string} {string}")
    public void the_API_is_available_and_hit_available_API_with_symbols(String symbolName, String symbolValue, String date) {
        RequestSpecification requestSpecification = RestAssured.given();
        responseOfLatestExchange = requestSpecification
                .queryParam(symbolName, symbolValue)
                .get(actualURL);
        Assert.assertEquals(responseOfLatestExchange.jsonPath().get("base"), "EUR");
        log.info("Calling exchange rates API for : "+symbolName);
        Assert.assertNotNull(responseOfLatestExchange.jsonPath().getString("rates"));
        log.info("Calling exchange rates API for given symbols: "+symbolValue);
        Assert.assertEquals(responseOfLatestExchange.jsonPath().get("date"), date);
        log.info("Calling exchange rates API for date : "+date);

    }

    @When("The API is available and hit available API with base {string} {string} {string}")
    public void the_API_is_available_and_hit_available_API_with_base(String baseName, String baseValue, String date) {
        RequestSpecification requestSpecification = RestAssured.given();
        responseOfLatestExchange = requestSpecification
                .queryParam(baseName, baseValue)
                .get(actualURL);
        Assert.assertEquals(responseOfLatestExchange.jsonPath().get("base"), "USD");
        log.info("Calling exchange rates API for : "+baseName);
        Assert.assertNotNull(responseOfLatestExchange.jsonPath().getString("rates"));
        log.info("Calling exchange rates API for given base: "+baseValue);
        Assert.assertEquals(responseOfLatestExchange.jsonPath().get("date"), date);
        log.info("Calling exchange rates API for date : "+date);
    }

    @When("The API is available and hit available API with base {string} {string} {string} {string} {string}")
    public void the_API_is_available_and_hit_available_API_with_base(String symbolName, String symbolValue, String baseName, String baseValue, String date) {
        RequestSpecification requestSpecification = RestAssured.given();
        responseOfLatestExchange = requestSpecification
                .queryParam(symbolName, symbolValue)
                .queryParam(baseName, baseValue)
                .get(actualURL);
        Assert.assertEquals(responseOfLatestExchange.jsonPath().get("base"), "USD");
        log.info("Calling exchange rates API for : "+baseName+"and"+symbolName);
        Assert.assertNotNull(responseOfLatestExchange.jsonPath().getString("rates"));
        log.info("Calling exchange rates API for given base and symbol: "+baseValue+"and"+symbolValue);
        Assert.assertEquals(responseOfLatestExchange.jsonPath().get("date"), date);
        log.info("Calling exchange rates API for date : "+date);
    }

    @Given("Incomplete URL should throw an error {string}")
    public void incomplete_URL_should_throw_an_error(String incompleteURL) {
        RequestSpecification requestSpecification = RestAssured.given();
        responseOfLatestExchange = requestSpecification
                .get(incompleteURL);
        Assert.assertTrue(responseOfLatestExchange.jsonPath().get("error").toString().contains("does not match format"));
        log.error("Url is incomplete");
    }
}
