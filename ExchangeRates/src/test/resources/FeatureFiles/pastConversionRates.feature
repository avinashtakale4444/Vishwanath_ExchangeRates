Feature: Past Foreign Exchange Rates


  Scenario Outline: Test rates API for past exchange rates
    Given Rates API for Latest Foreign Exchange rates "<API>"
    When The API is available and hit available API "<dateValue>"
    Then API should return success status code
    Examples: Values of API and status code
      | API                                    | dateValue  |
      | https://api.ratesapi.io/api/2010-01-12 | 2010-01-12 |

  Scenario Outline: Test rates API for past exchange rates with symbols
    Given Rates API for Latest Foreign Exchange rates "<API>"
    When The API is available and hit available API with symbols "<symbolName>" "<symbolValue>" "<dateValue>"
    Then API should return success status code
    Examples: Values of API and status code
      | API                                    | symbolName | symbolValue | dateValue  |
      | https://api.ratesapi.io/api/2010-01-12 | symbols    | USD,GBP     | 2010-01-12 |

  Scenario Outline: Test rates API for past exchange rates with base rate
    Given Rates API for Latest Foreign Exchange rates "<API>"
    When The API is available and hit available API with base "<baseName>" "<baseValue>" "<dateValue>"
    Then API should return success status code
    Examples: Values of API and status code
      | API                                    | baseName | baseValue | dateValue  |
      | https://api.ratesapi.io/api/2010-01-12 | base     | USD       | 2010-01-12 |

  Scenario Outline: Test rates API for past exchange rates with symbols and base rate
    Given Rates API for Latest Foreign Exchange rates "<API>"
    When The API is available and hit available API with base "<symbolName>" "<symbolValue>" "<baseName>" "<baseValue>" "<dateValue>"
    Then API should return success status code
    Examples: Values of API and status code
      | API                                    | symbolName | symbolValue | baseName | baseValue | dateValue  |
      | https://api.ratesapi.io/api/2010-01-12 | symbols    | GBP         | base     | USD       | 2010-01-12 |