import slugify from "slugify";

const rawItems = [
  { id: 1, title: "Cuphead", description: "A classic run-and-gun platformer with hand-drawn animation.", img: "https://example.com/img/cuphead.jpg", price: 19.99 },
  { id: 2, title: "Hollow Knight", description: "A vast, moody metroidvania set beneath a ruined kingdom.", img: "https://example.com/img/hollow-knight.jpg", price: 14.99 },
  { id: 3, title: "Hades", description: "A roguelike dungeon crawler through the Underworld.", img: "https://example.com/img/hades.jpg", price: 24.99 },
  { id: 4, title: "Celeste", description: "A tight, punishing platformer about climbing a mountain.", img: "https://example.com/img/celeste.jpg", price: 19.99 },
  { id: 5, title: "Stardew Valley", description: "A farming and life sim in a sleepy countryside town.", img: "https://example.com/img/stardew-valley.jpg", price: 14.99 },
  { id: 6, title: "Undertale", description: "A story-driven RPG where you can spare every enemy.", img: "https://example.com/img/undertale.jpg", price: 9.99 },
  { id: 7, title: "Terraria", description: "A 2D sandbox adventure full of building and exploration.", img: "https://example.com/img/terraria.jpg", price: 9.99 },
  { id: 8, title: "Dead Cells", description: "A rogue-lite, metroidvania-inspired action-platformer.", img: "https://example.com/img/dead-cells.jpg", price: 24.99 },
  { id: 9, title: "Slay the Spire", description: "A deck-building roguelike where every run is different.", img: "https://example.com/img/slay-the-spire.jpg", price: 24.99 },
  { id: 10, title: "Ori and the Blind Forest", description: "A gorgeous, emotional metroidvania platformer.", img: "https://example.com/img/ori-blind-forest.jpg", price: 19.99 },
  { id: 11, title: "Ori and the Will of the Wisps", description: "The sequel expanding Ori's world with new abilities.", img: "https://example.com/img/ori-will-wisps.jpg", price: 29.99 },
  { id: 12, title: "Hollow Knight: Silksong", description: "Hornet's own journey through a new haunted kingdom.", img: "https://example.com/img/silksong.jpg", price: 19.99 },
  { id: 13, title: "Return of the Obra Dinn", description: "A deduction mystery aboard a ghost ship.", img: "https://example.com/img/obra-dinn.jpg", price: 19.99 },
  { id: 14, title: "Disco Elysium", description: "A detective RPG built entirely around dialogue and thought.", img: "https://example.com/img/disco-elysium.jpg", price: 39.99 },
  { id: 15, title: "Outer Wilds", description: "A space exploration mystery inside a 22-minute time loop.", img: "https://example.com/img/outer-wilds.jpg", price: 24.99 },
  { id: 16, title: "Subnautica", description: "An underwater survival and exploration adventure.", img: "https://example.com/img/subnautica.jpg", price: 29.99 },
  { id: 17, title: "Rimworld", description: "A colony sim that generates emergent survival stories.", img: "https://example.com/img/rimworld.jpg", price: 34.99 },
  { id: 18, title: "Factorio", description: "A factory-building game about automation at scale.", img: "https://example.com/img/factorio.jpg", price: 35.00 },
  { id: 19, title: "Hades II", description: "The follow-up roguelike starring Melinoë against Chronos.", img: "https://example.com/img/hades-2.jpg", price: 29.99 },
  { id: 20, title: "Vampire Survivors", description: "A minimalist bullet-heaven survival game.", img: "https://example.com/img/vampire-survivors.jpg", price: 4.99 },
  { id: 21, title: "Balatro", description: "A poker-inspired roguelike deck-builder.", img: "https://example.com/img/balatro.jpg", price: 14.99 },
  { id: 22, title: "Inside", description: "A dark, atmospheric puzzle-platformer.", img: "https://example.com/img/inside.jpg", price: 19.99 },
  { id: 23, title: "Limbo", description: "A monochrome puzzle-platformer about a boy in a nightmare.", img: "https://example.com/img/limbo.jpg", price: 9.99 },
  { id: 24, title: "Katana ZERO", description: "A stylish, time-manipulating action platformer.", img: "https://example.com/img/katana-zero.jpg", price: 14.99 },
  { id: 25, title: "Hyper Light Drifter", description: "An action-adventure through a beautiful, decaying world.", img: "https://example.com/img/hyper-light-drifter.jpg", price: 19.99 },
  { id: 26, title: "Cult of the Lamb", description: "A cult-management sim mixed with roguelike combat.", img: "https://example.com/img/cult-of-the-lamb.jpg", price: 24.99 },
  { id: 27, title: "Stray", description: "An adventure game where you play as a stray cat.", img: "https://example.com/img/stray.jpg", price: 29.99 },
  { id: 28, title: "It Takes Two", description: "A co-op adventure about a couple shrunk into dolls.", img: "https://example.com/img/it-takes-two.jpg", price: 39.99 },
  { id: 29, title: "A Short Hike", description: "A cozy exploration game about climbing a mountain.", img: "https://example.com/img/a-short-hike.jpg", price: 7.99 },
  { id: 30, title: "Spiritfarer", description: "A cozy management game about being a ferrymaster for the dead.", img: "https://example.com/img/spiritfarer.jpg", price: 29.99 },
  { id: 31, title: "Coffee Talk", description: "A visual novel about brewing coffee and hearing stories.", img: "https://example.com/img/coffee-talk.jpg", price: 12.99 },
  { id: 32, title: "Firewatch", description: "A mystery drama set in the Wyoming wilderness.", img: "https://example.com/img/firewatch.jpg", price: 19.99 },
  { id: 33, title: "What Remains of Edith Finch", description: "A collection of strange short stories about one family.", img: "https://example.com/img/edith-finch.jpg", price: 19.99 },
  { id: 34, title: "Gris", description: "A wordless, watercolor platformer about grief.", img: "https://example.com/img/gris.jpg", price: 16.99 },
  { id: 35, title: "Journey", description: "A wordless adventure across a vast desert.", img: "https://example.com/img/journey.jpg", price: 14.99 },
  { id: 36, title: "Baba Is You", description: "A puzzle game where you rewrite the rules of the world.", img: "https://example.com/img/baba-is-you.jpg", price: 14.99 },
  { id: 37, title: "The Witness", description: "An open-world puzzle game on a mysterious island.", img: "https://example.com/img/the-witness.jpg", price: 39.99 },
  { id: 38, title: "Portal 2", description: "A physics-based puzzle game with portals and dark humor.", img: "https://example.com/img/portal-2.jpg", price: 9.99 },
  { id: 39, title: "Hollow Knight: Godmaster", description: "The final boss-rush expansion to Hollow Knight.", img: "https://example.com/img/godmaster.jpg", price: 0.00 },
  { id: 40, title: "Cuphead: The Delicious Last Course", description: "A DLC expansion adding a new playable character and bosses.", img: "https://example.com/img/cuphead-dlc.jpg", price: 7.99 },
];

const items = rawItems.map((item) => ({
  ...item,
  slug: slugify(item.title, { lower: true }),
}));

export function itemsGetAll() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ items, itemsCount: items.length });
    }, 500);
  });
}

export function itemsGetById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = items.find((i) => i.id === id);
      item ? resolve(item) : reject(new Error(`Item ${id} not found`));
    }, 500);
  });
}

export default items;