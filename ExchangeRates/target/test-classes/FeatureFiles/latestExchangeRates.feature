Feature: Latest Foreign Exchange Rates


  Scenario Outline: Test rates API for latest exchange rates
    Given Rates API for Latest Foreign Exchange rates "<API>"
    When The API is available and hit available API "<dateValue>"
    Then API should return success status code
    Examples: Values of API and status code
      | API                                | dateValue  |
      | https://api.ratesapi.io/api/latest | 2021-01-11 |


  Scenario Outline: Test rates API for latest exchange rates
       Given Incomplete URL should throw an error "<API>"

    Examples: Values of API and status code
      | API                         |
      | https://api.ratesapi.io/api |

  Scenario Outline: Test rates API for latest exchange rates with symbols
    Given Rates API for Latest Foreign Exchange rates "<API>"
    When The API is available and hit available API with symbols "<symbolName>" "<symbolValue>" "<dateValue>"
    Then API should return success status code
    Examples: Values of API and status code
      | API                                | symbolName | symbolValue | dateValue  |
      | https://api.ratesapi.io/api/latest | symbols    | USD,GBP     | 2021-01-11 |

  Scenario Outline: Test rates API for latest exchange rates with base rate
    Given Rates API for Latest Foreign Exchange rates "<API>"
    When The API is available and hit available API with base "<baseName>" "<baseValue>" "<dateValue>"
    Then API should return success status code
    Examples: Values of API and status code
      | API                                | baseName | baseValue | dateValue  |
      | https://api.ratesapi.io/api/latest | base     | USD       | 2021-01-11 |

  Scenario Outline: Test rates API for latest exchange rates with symbols and base rate
    Given Rates API for Latest Foreign Exchange rates "<API>"
    When The API is available and hit available API with base "<symbolName>" "<symbolValue>" "<baseName>" "<baseValue>" "<dateValue>"
    Then API should return success status code
    Examples: Values of API and status code
      | API                                | symbolName | symbolValue | baseName | baseValue | dateValue  |
      | https://api.ratesapi.io/api/latest | symbols    | GBP         | base     | USD       | 2021-01-11 |