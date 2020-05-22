Feature: Ultimate Mortgage Calculator  Basic Mortgage Calculator successful submit

   Scenario: Check if Ultimate Mortgage Calculator  Basic Mortgage Calculator returns successful messages
      
      Given I open basic mortgage calculator page
      When I enter the values for amount and term
       |amount|term|
       |250000| 27 |
       |300000| 28 |

      And I enter the values for interest rate and mortgage fees
       |rate  | fee  |
       |1.41  | 1198 |
       |1.60  | 2500 |
      Then I submit the form