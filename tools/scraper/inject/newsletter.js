const newsletterEnums = require("WAWebCommonNewsletterEnums");
const mexNewsletterUtils = require("WAWebMexNewsletterUtils");

const NewsletterReactions = Object.fromEntries(
    Object.entries(makeEnumerable(newsletterEnums.NewsletterReactionCodesSetting))
        .map(([key, val]) => {
            const mexValue = mexNewsletterUtils.mapReactionCodesSettingToMexInput(val);
            return [key, mexValue.toLowerCase()];
        }),
);

const specs = {
    enums: {
        NewsletterSubscriberRole: makeEnumerable(newsletterEnums.NewsletterMembershipType),
        NewsletterPrivacy: makeEnumerable(newsletterEnums.NewsletterPrivacy),
        NewsletterState: makeEnumerable(newsletterEnums.NewsletterState),
        NewsletterMembershipType: makeEnumerable(newsletterEnums.NewsletterMembershipType),
        NewsletterReactions: NewsletterReactions,
    },
}

console.log("NewsletterSpecs", specs);

return specs;