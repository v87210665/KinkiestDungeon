"use strict";

let LAYERS_BASE = [
	"Mask",
	"Blindfold",
	"Gag",
	// Head
	"Eyes",
	"Head",

	// Clothes that go over the chest and hang down
	"Shoulders",

	// Collar and collar accessories
	"CollarAcc",
	"Collar",


	// This slot is for things like breastplates and things that go over
	"ChestStraps",
	"Chestplate",
	// For form-fitting stuff that nonetheless goes over a shirt
	"Bustier",
	"Shirt",
	"Harness",
	// Chest is breasts, should only intersect on bottom and side edges, top is indeterminate
	"Straps",
	"Necklace",
	"Chest",
	// For things that go directly under the breasts
	"Underbust",
	// For things that go around armpit area--mainly ropes and stuff that goes under the breasts
	"Underarms",
	"Corset",

	// For things that go under a corset rather than over
	"CorsetLining",



	// Left arm clothes
	"SleeveLeft",
	"GloveLeft",

	// Left arm body - reserved for body and catsuits
	"HandLeft",
	"ArmLeft",


	// Lower body clothes with a bit more bulk
	"SkirtDeco",
	"Skirt",
	"PantLeft",
	"PantRight",
	"Pants",
	// Lower body underwear
	"StockingLeft",
	"StockingRight",
	"Panties",

	// Lower body body - reserved for body and catsuits
	// Note that the lower torso is complex, you should avoid internal overlaps as much as possible
	// External overlaps are fine, e.g. right leg goes over
	"FootLeft",
	"LegLeft",
	"FootRight",
	"LegRight",
	"FootLeftHogtie",
	"FootRightKneel",
	"Butt",
	"TorsoUpper",
	"TorsoLower",
	"Torso",

	// Right arm clothes
	"SleeveRight",
	"GloveRight",

	// Right arm body - reserved for body and catsuits
	"HandRight",
	"ArmRight",

	// Clothes that go behind
	"Coat",
	"Cape",
];

let LayerProperties = {
	Eyes: {
		Parent: "Head",
	},
	HairFront: {
		Parent: "Head",
	},
	HairMiddle: {
		Parent: "Head",
	},
	HairBack: {
		Parent: "Head",
	},
	Mouth: {
		Parent: "Head",
	},
	Ears: {
		Parent: "Head",
	},
	Nose: {
		Parent: "Head",
	},
};

// Constants
/** Internal value for layering */
let LAYER_INCREMENT = 1000;

let MODELHEIGHT = 3500;
let MODELWIDTH = 2480;
/** Model scale to UI scalee */
let MODEL_SCALE = 1000/MODELHEIGHT;
let MODEL_XOFFSET = Math.floor((- MODELWIDTH * MODEL_SCALE)/2);