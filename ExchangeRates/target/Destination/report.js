$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFiles/latestExchangeRates.feature");
formatter.feature({
  "name": "Latest Foreign Exchange Rates",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test rates API for latest exchange rates",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates \"\u003cAPI\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "The API is available and hit available API \"\u003cdateValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "API should return success status code",
  "keyword": "Then "
});
formatter.examples({
  "name": "Values of API and status code",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "API",
        "dateValue"
      ]
    },
    {
      "cells": [
        "https://api.ratesapi.io/api/latest",
        "2020-12-11"
      ]
    },
    {
      "cells": [
        "https://api.ratesapi.io/api",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test rates API for latest exchange rates",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates \"https://api.ratesapi.io/api/latest\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.rates_API_for_Latest_Foreign_Exchange_rates(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API is available and hit available API \"2020-12-11\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.the_API_is_available_and_hit_available_API(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c2020-12-1[4]\u003e but was:\u003c2020-12-1[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.exchangeRate.LatestExchangeRates.the_API_is_available_and_hit_available_API(LatestExchangeRates.java:28)\r\n\tat ✽.The API is available and hit available API \"2020-12-11\"(file:///C:/Users/amahadik/Desktop/ExchangeRates/src/test/resources/FeatureFiles/latestExchangeRates.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "API should return success status code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.api_should_return_success_status_code()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Test rates API for latest exchange rates",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates \"https://api.ratesapi.io/api\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.rates_API_for_Latest_Foreign_Exchange_rates(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API is available and hit available API \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.the_API_is_available_and_hit_available_API(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003cnull\u003e but was:\u003c\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:120)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.exchangeRate.LatestExchangeRates.the_API_is_available_and_hit_available_API(LatestExchangeRates.java:28)\r\n\tat ✽.The API is available and hit available API \"\"(file:///C:/Users/amahadik/Desktop/ExchangeRates/src/test/resources/FeatureFiles/latestExchangeRates.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "API should return success status code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.api_should_return_success_status_code()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Test rates API for latest exchange rates",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Incomplete URL should throw an error \"\u003cAPI\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "name": "Values of API and status code",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "API"
      ]
    },
    {
      "cells": [
        "https://api.ratesapi.io/api"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test rates API for latest exchange rates",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Incomplete URL should throw an error \"https://api.ratesapi.io/api\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.incomplete_URL_should_throw_an_error(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test rates API for latest exchange rates with symbols",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates \"\u003cAPI\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "The API is available and hit available API with symbols \"\u003csymbolName\u003e\" \"\u003csymbolValue\u003e\" \"\u003cdateValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "API should return success status code",
  "keyword": "Then "
});
formatter.examples({
  "name": "Values of API and status code",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "API",
        "symbolName",
        "symbolValue",
        "dateValue"
      ]
    },
    {
      "cells": [
        "https://api.ratesapi.io/api/latest",
        "symbols",
        "USD,GBP",
        "2020-12-11"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test rates API for latest exchange rates with symbols",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates \"https://api.ratesapi.io/api/latest\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.rates_API_for_Latest_Foreign_Exchange_rates(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API is available and hit available API with symbols \"symbols\" \"USD,GBP\" \"2020-12-11\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.the_API_is_available_and_hit_available_API_with_symbols(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c2020-12-1[4]\u003e but was:\u003c2020-12-1[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.exchangeRate.LatestExchangeRates.the_API_is_available_and_hit_available_API_with_symbols(LatestExchangeRates.java:44)\r\n\tat ✽.The API is available and hit available API with symbols \"symbols\" \"USD,GBP\" \"2020-12-11\"(file:///C:/Users/amahadik/Desktop/ExchangeRates/src/test/resources/FeatureFiles/latestExchangeRates.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "API should return success status code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.api_should_return_success_status_code()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Test rates API for latest exchange rates with base rate",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates \"\u003cAPI\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "The API is available and hit available API with base \"\u003cbaseName\u003e\" \"\u003cbaseValue\u003e\" \"\u003cdateValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "API should return success status code",
  "keyword": "Then "
});
formatter.examples({
  "name": "Values of API and status code",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "API",
        "baseName",
        "baseValue",
        "dateValue"
      ]
    },
    {
      "cells": [
        "https://api.ratesapi.io/api/latest",
        "base",
        "USD",
        "2020-12-11"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test rates API for latest exchange rates with base rate",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates \"https://api.ratesapi.io/api/latest\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.rates_API_for_Latest_Foreign_Exchange_rates(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API is available and hit available API with base \"base\" \"USD\" \"2020-12-11\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.the_API_is_available_and_hit_available_API_with_base(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c2020-12-1[4]\u003e but was:\u003c2020-12-1[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.exchangeRate.LatestExchangeRates.the_API_is_available_and_hit_available_API_with_base(LatestExchangeRates.java:57)\r\n\tat ✽.The API is available and hit available API with base \"base\" \"USD\" \"2020-12-11\"(file:///C:/Users/amahadik/Desktop/ExchangeRates/src/test/resources/FeatureFiles/latestExchangeRates.feature:30)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "API should return success status code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.api_should_return_success_status_code()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Test rates API for latest exchange rates with symbols and base rate",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates \"\u003cAPI\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "The API is available and hit available API with base \"\u003csymbolName\u003e\" \"\u003csymbolValue\u003e\" \"\u003cbaseName\u003e\" \"\u003cbaseValue\u003e\" \"\u003cdateValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "API should return success status code",
  "keyword": "Then "
});
formatter.examples({
  "name": "Values of API and status code",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "API",
        "symbolName",
        "symbolValue",
        "baseName",
        "baseValue",
        "dateValue"
      ]
    },
    {
      "cells": [
        "https://api.ratesapi.io/api/latest",
        "symbols",
        "GBP",
        "base",
        "USD",
        "2020-12-11"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test rates API for latest exchange rates with symbols and base rate",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates \"https://api.ratesapi.io/api/latest\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.rates_API_for_Latest_Foreign_Exchange_rates(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API is available and hit available API with base \"symbols\" \"GBP\" \"base\" \"USD\" \"2020-12-11\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.the_API_is_available_and_hit_available_API_with_base(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c2020-12-1[4]\u003e but was:\u003c2020-12-1[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.exchangeRate.LatestExchangeRates.the_API_is_available_and_hit_available_API_with_base(LatestExchangeRates.java:68)\r\n\tat ✽.The API is available and hit available API with base \"symbols\" \"GBP\" \"base\" \"USD\" \"2020-12-11\"(file:///C:/Users/amahadik/Desktop/ExchangeRates/src/test/resources/FeatureFiles/latestExchangeRates.feature:38)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "API should return success status code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.api_should_return_success_status_code()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/FeatureFiles/pastConversionRates.feature");
formatter.feature({
  "name": "Past Foreign Exchange Rates",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test rates API for past exchange rates",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates \"\u003cAPI\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "The API is available and hit available API \"\u003cdateValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "API should return success status code",
  "keyword": "Then "
});
formatter.examples({
  "name": "Values of API and status code",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "API",
        "dateValue"
      ]
    },
    {
      "cells": [
        "https://api.ratesapi.io/api/2010-01-12",
        "2010-01-12"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test rates API for past exchange rates",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates \"https://api.ratesapi.io/api/2010-01-12\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.rates_API_for_Latest_Foreign_Exchange_rates(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API is available and hit available API \"2010-01-12\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.the_API_is_available_and_hit_available_API(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return success status code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.api_should_return_success_status_code()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test rates API for past exchange rates with symbols",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates \"\u003cAPI\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "The API is available and hit available API with symbols \"\u003csymbolName\u003e\" \"\u003csymbolValue\u003e\" \"\u003cdateValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "API should return success status code",
  "keyword": "Then "
});
formatter.examples({
  "name": "Values of API and status code",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "API",
        "symbolName",
        "symbolValue",
        "dateValue"
      ]
    },
    {
      "cells": [
        "https://api.ratesapi.io/api/2010-01-12",
        "symbols",
        "USD,GBP",
        "2010-01-12"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test rates API for past exchange rates with symbols",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates \"https://api.ratesapi.io/api/2010-01-12\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.rates_API_for_Latest_Foreign_Exchange_rates(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API is available and hit available API with symbols \"symbols\" \"USD,GBP\" \"2010-01-12\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.the_API_is_available_and_hit_available_API_with_symbols(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return success status code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.api_should_return_success_status_code()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test rates API for past exchange rates with base rate",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates \"\u003cAPI\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "The API is available and hit available API with base \"\u003cbaseName\u003e\" \"\u003cbaseValue\u003e\" \"\u003cdateValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "API should return success status code",
  "keyword": "Then "
});
formatter.examples({
  "name": "Values of API and status code",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "API",
        "baseName",
        "baseValue",
        "dateValue"
      ]
    },
    {
      "cells": [
        "https://api.ratesapi.io/api/2010-01-12",
        "base",
        "USD",
        "2010-01-12"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test rates API for past exchange rates with base rate",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates \"https://api.ratesapi.io/api/2010-01-12\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.rates_API_for_Latest_Foreign_Exchange_rates(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API is available and hit available API with base \"base\" \"USD\" \"2010-01-12\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.the_API_is_available_and_hit_available_API_with_base(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return success status code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.api_should_return_success_status_code()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test rates API for past exchange rates with symbols and base rate",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates \"\u003cAPI\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "The API is available and hit available API with base \"\u003csymbolName\u003e\" \"\u003csymbolValue\u003e\" \"\u003cbaseName\u003e\" \"\u003cbaseValue\u003e\" \"\u003cdateValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "API should return success status code",
  "keyword": "Then "
});
formatter.examples({
  "name": "Values of API and status code",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "API",
        "symbolName",
        "symbolValue",
        "baseName",
        "baseValue",
        "dateValue"
      ]
    },
    {
      "cells": [
        "https://api.ratesapi.io/api/2010-01-12",
        "symbols",
        "GBP",
        "base",
        "USD",
        "2010-01-12"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test rates API for past exchange rates with symbols and base rate",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates \"https://api.ratesapi.io/api/2010-01-12\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.rates_API_for_Latest_Foreign_Exchange_rates(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API is available and hit available API with base \"symbols\" \"GBP\" \"base\" \"USD\" \"2010-01-12\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.the_API_is_available_and_hit_available_API_with_base(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return success status code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.exchangeRate.LatestExchangeRates.api_should_return_success_status_code()"
});
formatter.result({
  "status": "passed"
});
});