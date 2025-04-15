# Kata-Typescript
This Gilded Rose kata also contains a react frontend so you can have some interactivty with the Gilded Rose kata. Please keep in mind that this is a MVP a lot can be improved.

Before you execute any commands you should also install all the dependencies:
```npm install```


If you only want to test or see the kata code you can have a look in app/lib/gilded-rose.ts and the app/lib/kata folder.

You can use following command to run the accompied test in the test/ folder.

```npm run test```

## How to run the React frontend

If you want to run it use following command:
```npm run dev```

The React frontend will run on [localhost:5173](http://localhost:5173/).

You will be greeted with the "Next day" button and by it's side the amount of days you already have. Underneath that you have the cards each representing an item.

The react dependencies used are:
- React router for routing, using the flatRoutes config (see the app/routes.tsx). This means the folder structure is used as the routing routes (about.tsx in app/routes will route to <baseurl>/about). 
- Shadcn/ui is used as component library.

# Project management

This kata is tracked by this Trello kanban board: [Kanban Board](https://trello.com/invite/b/67fa2835db3fb7b5dd911c0c/ATTIf20112eaff94162ff3b51cfde195edde80434B52/kata)

The git commits are structed with the kata-[ticket number] [title], so you can follow the linked tickets on the kata board.

The kanban tickets with blue labels are kata-Typescript only.

You can also see the public repo here: [kata-typescript-java](https://github.com/BramDeCneudt/kata-typescript-react)

# Gilded Rose Requirements Specification

Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a
prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods.
Unfortunately, our goods are constantly degrading in `Quality` as they approach their sell by date.

We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named
Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that
we can begin selling a new category of items. First an introduction to our system:

- All `items` have a `SellIn` value which denotes the number of days we have to sell the `items`
- All `items` have a `Quality` value which denotes how valuable the item is
- At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, `Quality` degrades twice as fast
- The `Quality` of an item is never negative
- __"Aged Brie"__ actually increases in `Quality` the older it gets
- The `Quality` of an item is never more than `50`
- __"Sulfuras"__, being a legendary item, never has to be sold or decreases in `Quality`
- __"Backstage passes"__, like aged brie, increases in `Quality` as its `SellIn` value approaches;
    - `Quality` increases by `2` when there are `10` days or less and by `3` when there are `5` days or less but
    - `Quality` drops to `0` after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

- __"Conjured"__ items degrade in `Quality` twice as fast as normal items

Feel free to make any changes to the `UpdateQuality` method and add any new code as long as everything
still works correctly. However, do not alter the `Item` class or `Items` property as those belong to the
goblin in the corner who will insta-rage and one-shot you as he doesn't believe in shared code
ownership (you can make the `UpdateQuality` method and `Items` property static if you like, we'll cover
for you).

Just for clarification, an item can never have its `Quality` increase above `50`, however __"Sulfuras"__ is a
legendary item and as such its `Quality` is `80` and it never alters.

