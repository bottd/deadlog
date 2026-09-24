//#region ../lib/utils/src/relatedItems.ts
var afterRatio = (count, total) => (total && count !== void 0 ? count / total : null);
var relatedShare = (related, item) => ({
	before: item.buyers / related.appearances,
	after: afterRatio(item.after, related.afterAppearances)
});
var abilityShare = (order, entry) => ({
	before: entry.before / order.matches,
	after: afterRatio(entry.after, order.afterMatches)
});
var boughtByShare = (hero) => ({
	before: hero.buyers / hero.appearances,
	after: afterRatio(hero.afterBuyers, hero.afterAppearances)
});
//#endregion
export { boughtByShare as n, relatedShare as r, abilityShare as t };
