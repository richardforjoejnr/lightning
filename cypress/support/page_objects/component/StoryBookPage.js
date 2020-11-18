const STORYBOOK_TITLE = '.sidebar-header a';
const STORY_BOOK_IMAGE = '.sidebar-header a img';
const INTRO_PAGE = '#intro--page';
const TILES_CONTENT = '#tiles-contenttile';
const TILES_CONTENT_BASIC = '#tiles-contenttile--basic';
const CONTROLL_PROGRESS = '.css-1grksfm[type=range]';
const CONTROLL_PROGRESS_DRAG = '.css-7pf6at > :nth-child(3)';
const STORY_BOOK_IFRAME = '#storybook-preview-iframe';
const STORY_BOOK_TITLE = '#title';
const STORY_BOOK_SUBTITLE = '#subtitle'
const IFRAME = 'iframe#storybook-preview-iframe'


class StoryBookPage {

// ACTIONS
static typeTitle(title)
{
  cy.get(STORY_BOOK_TITLE).clear()
  .type(title).should('have.value', `${title}`)
}

static typeSubTitle(subtitle)
{
  cy.get(STORY_BOOK_SUBTITLE).clear()
  .type(subtitle).should('have.value', `${subtitle}`)
}

static setProgress(value)
{
  cy.get(CONTROLL_PROGRESS)
.invoke('val', value)
.trigger('change')
.get(CONTROLL_PROGRESS_DRAG)
.should('have.text', `${value} / 1`)
}

// GETTERS
static getTitle()
{
    return cy.get(STORYBOOK_TITLE).title
}


static getImgUrl()
{
    return cy.get(STORY_BOOK_IMAGE).invoke('attr', 'src')
}


static getIframeDocument() {
  return cy.get(IFRAME).its("0.contentDocument").should("exist");
}

static getIframeBody() {
  return getIframeDocument().its("body").should("not.be.undefined").then(cy.wrap);
}


}

export default StoryBookPage;
