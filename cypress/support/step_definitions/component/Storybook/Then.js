import { Then } from "cypress-cucumber-preprocessor/steps";
import StoryBookPage from './../../../page_objects/component/StoryBookPage';


Then('I see {string} in the title', (title) => {
  StoryBookPage.typeTitle(title)

})

Then('I see {string} in the sub title', (subtitle) => {
  StoryBookPage.typeSubTitle(subtitle)

})
