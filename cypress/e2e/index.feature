Feature: YouTube Loop
  Scenario: I see the title and heading
    Given I visit "/"
    Then I see document title "YouTube Loop"
      And I see text "Loop"

  Scenario: I toggle dark mode
    Given I visit "/"
    When I click on text "Dark mode"
      And I find element by placeholder text "Paste YouTube URL"
      And I type "https://www.youtube.com/watch?v=bHQqvYy5KYo&feature=youtu.be"
    Then I see input value "bHQqvYy5KYo"
      And I see URL "/?videoId=bHQqvYy5KYo"

  Scenario: I input the YouTube URL
    Given I visit "/"
    When I find element by placeholder text "Paste YouTube URL"
      And I type "https://youtu.be/bHQqvYy5KYo"
    Then I see input value "bHQqvYy5KYo"
      And I see URL "/?videoId=bHQqvYy5KYo"
    When I find input by display value "bHQqvYy5KYo"
      And I clear
      And I type "M7lc1UVf-VE"
    Then I see input value "M7lc1UVf-VE"
      And I see URL "/?videoId=M7lc1UVf-VE"

  Scenario: I see player options
    Given I visit "/?videoId=bHQqvYy5KYo"
    Then I see label "Video ID"
      And I see label "Time Start"
      And I see label "Time End"
      And I see label "Width"

  Scenario: I set the player width
    Given I visit "/"
    When I find element by placeholder text "Paste YouTube URL"
      And I type "bHQqvYy5KYo"
    Then I see input value "bHQqvYy5KYo"
    When I find select by display value "640"
      And I select option "1080"
    Then I find select by display value "1080"
      And I see URL "/?videoId=bHQqvYy5KYo&width=1080"

  Scenario: I load the page with options using query params
    Given I visit "/?videoId=bHQqvYy5KYo&timeStart=1&timeEnd=3&width=720"
    When I find input by label text "Video ID"
    Then I see value "bHQqvYy5KYo"
    When I find input by label text "Time Start"
    Then I see value "1"
    When I find input by label text "Time End"
    Then I see value "3"
    When I find input by label text "Width"
    Then I see value "720"
