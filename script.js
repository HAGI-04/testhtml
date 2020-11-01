function submitTreeData() {
    var flag;
    const dic = {};
    const tree_type = document.getElementById("type").value;
    const check_status = document.getElementsByName("learned");

    // checkboxデータ取得&辞書に記録
    for (let i = 0; i < check_status.length; i++) {
        dic[check_status[i].value] = check_status.checked;

        check_status[i].checked ? flag = 1 : flag = 0;
        dic[check_status[i].value] = flag;
    }

    // localstorageへの保管
    window.localStorage.setItem(tree_type, JSON.stringify(dic));
}

function checkboxInitialize() {
    var status = "";
    const tree_type = document.getElementById("type").value;
    const statuses = JSON.parse(localStorage.getItem(tree_type));
    const check_status = document.getElementsByName("learned");

    // チェックボックスチェック処理
    for (let i = 0; i < check_status.length; i++) {
        status = statuses[check_status[i].value];
        if (status == "1") check_status[i].checked = true;
        else check_status[i].checked = false;
    }
}

function selectAreaInitialize() {
    const selected_user = JSON.parse(localStorage.getItem("selectedUser"));

    // selectバーを直近の編集対象者に合わせる
    if (selected_user != null)
        document.getElementById("user-select").value = selected_user;
}

function treeDataDownload() {
    // ユーザーネーム取得
    const user_name = document.getElementById("user-select").value;

    // DLリンクのaタグを取得
    const link = document.getElementById("download");

    // ツリーデータ取得
    const vitamins_data = JSON.parse(window.localStorage.getItem("vitamins"));
    const equipment_armor_data = JSON.parse(window.localStorage.getItem("equipment-armor"));
    const equipment_weapon_data = JSON.parse(window.localStorage.getItem("equipment-weapon"));
    const equipment_other_data = JSON.parse(window.localStorage.getItem("equipment-other"));
    const crafting_data = JSON.parse(window.localStorage.getItem("crafting"));
    const construction_combat_data = JSON.parse(window.localStorage.getItem("construction-combat"));
    const construction_other_data = JSON.parse(window.localStorage.getItem("construction-other"));
    const walkers_low_data = JSON.parse(window.localStorage.getItem("walkers-low"));
    const walkers_high_data = JSON.parse(window.localStorage.getItem("walkers-high"));

    // 警告文処理
    var err_message = "";
    if (vitamins_data == null) err_message += "vitamins_data is null\n";
    if (equipment_armor_data == null) err_message += "equipment_armor_data is null\n";
    if (equipment_weapon_data == null) err_message += "equipment_weapon_data is null\n";
    if (equipment_other_data == null) err_message += "equipment_other_data is null\n";
    if (crafting_data == null) err_message += "crafting_data is null\n";
    if (construction_combat_data == null) err_message += "construction_combat_data is null\n";
    if (construction_other_data == null) err_message += "construction_other_data is null\n";
    if (walkers_low_data == null) err_message += "walkers_low_data is null\n";
    if (walkers_high_data == null) err_message += "walkers_high_data is null\n";

    //警告文ポップとダウンロードの処理
    if (!(err_message == ""))
        alert(err_message);
    else {
        // userデータ保存
        window.localStorage.setItem("selectedUser", JSON.stringify(user_name));

        // 辞書結合
        const output = Object.assign(vitamins_data, equipment_armor_data, equipment_weapon_data, equipment_other_data, crafting_data, construction_combat_data, construction_other_data, walkers_low_data, walkers_high_data);

        let blob = new Blob([JSON.stringify(output)], { type: "text/plain" });
        link.download = user_name + "_treedata.txt"
        link.href = window.URL.createObjectURL(blob);
    }
}

function showLearnedData() {
    var all_learned_data = { "Vision_Powder": [], "Desert_Mule": [], "Rupu_Repellent": [], "Jojo_Mojo": [], "Cauterizing_Station": [], "Fury_Fumes": [], "Bonebreaker": [], "Race_Dust": [], "Sinus_Destroyer": [], "Primitive_Bandage": [], "Sterile_Bandage": [], "Fiber_Shirt_and_Trousers": [], "Fiber_Sandals": [], "Fiber_Arm_Wraps": [], "Fiber_Headwrap": [], "Baskwood_Armor": [], "Baskwood_Boots": [], "Baskwood_Bracers": [], "Iron_Studded_Armor": [], "Iron_Studded_Boots": [], "Iron_Studded_Gauntlets": [], "Rupu_Fur_Armor": [], "Rupu_Fur_Sandals": [], "Rupu_Fur_Sleeves": [], "Cloaked_Rupu_Fur_Armor": [], "Triple_Stitch_Armor": [], "Triple_Stitch_Boots": [], "Triple_Stitch_Bracers": [], "Redwood_Wood_Armor": [], "Redwood_Wood_Boots": [], "Redwood_Wood_Brace": [], "Cloak": [], "Foresters_Armor": [], "Foresters_Sandals": [], "Foresters_Sleeves": [], "Brittle_Bone_Armor": [], "Carapace_Armor": [], "Carapace_Boots": [], "Carapace_Gauntlets": [], "Beat_Stick": [], "Bonespike_Sword": [], "Firestone_Bludgeon": [], "Firestone_Kopesh": [], "Short_Malletblade": [], "Wyndan_Sabre": [], "Nibiran_Curved_Dagger": [], "Long_Bonespike_Swordstaff": [], "Sawtooth_Sword": [], "Firestone_Longblade": [], "Singblade": [], "Wyndan_Flame_Sword": [], "Nibiran_Decapitator": [], "Woodcutters_Hatchet": [], "Simple_Pickaxe": [], "Advanced_Pickaxe": [], "Master_Pickaxe": [], "Simple_Repair_Hammer": [], "Simple_Sickle": [], "Scythe": [], "Rawbone_Hand_Axe": [], "Heavy_Rawbone_Hand_Axe": [], "Advanced_Hatchet": [], "Bouldercut_Hand_Axe": [], "Nibiran_Hand_Axe": [], "Firestone_Axe": [], "Rawbone_Battle_Axe": [], "Bouldercut_Battle_Axe": [], "Nibiran_Battle_Axe": [], "Firestone_Battleaxe": [], "Torch": [], "Jaggertooth_Club": [], "Rawbone_Club": [], "Spikebone_Club": [], "Short_Ceramic_Hoofmace": [], "Wyndan_Hammer": [], "Nibiran_Hammer": [], "Jaggertooth_Maul": [], "Rawbone_Maul": [], "Spikebone_Maul": [], "Firestone_Bozdogan": [], "Long_Ceramic_Hoofmace": [], "Wyndan_Warhammer": [], "Nibiran_Warhammer": [], "Blunt_Quarterstaff": [], "Travellers_Staff": [], "Rawbone_Quarterstaff": [], "Firestone_Hammerstaff": [], "Firestone_Bladestaff": [], "Paddleblade_Quarterstaff": [], "Wyndanblade_Quarterstaff": [], "Nibiran_Quarterstaff": [], "Ironblade_Quarterstaff": [], "Javelin": [], "Firebomb": [], "Throwing_Net": [], "Repaired_Grappling_Hook": [], "Fast_Grappling_Hook": [], "Beltless_Grappling_Hook": [], "Torque_Backpack": [], "Long_Grappling_Hook": [], "Wingsuit": [], "Feather_Boots": [], "Makeshift_Bottle": [], "Durable_Water_Sack": [], "Split_Durable_Water_Sack": [], "Water_Circulator": [], "Bone_Bottle": [], "Ceramic_Flask": [], "Split_Ceramic_Flask": [], "Obsidian_Flask": [], "Split_Bone_Bottle": [], "Foraging_Pouch": [], "Large_Gathering_Pouch": [], "Light_Backpack": [], "Medium_Backpack": [], "Heavy_Backpack": [], "Torque_battery": [], "Improvised_Bottle": [], "Camp_Fire": [], "Fiberworking_Station": [], "Fiber_Weave": [], "Rope": [], "Advanced_Fiberworking_Station": [], "Nomad_Cloth": [], "Soil_Excavator": [], "Torque_Windmill_icon": [], "Clay": [], "Quarry": [], "Furnace": [], "Advanced_Furnace": [], "Earth_Wax": [], "Stomping_Station": [], "Purified_Water": [], "Water_Condenser": [], "Bone_Glue": [], "Purification_Station": [], "Liquid_Fuel": [], "Woodworking_Station_icon": [], "Fragment": [], "Wood_Shaft": [], "Advanced_Woodworking_Station_icon": [], "Lambermill": [], "Artificer_Woodworking_Station": [], "Reinforced_Plank": [], "Ballista": [], "Remote_Ballista": [], "Flint_Bolt": [], "Bone_Bolt": [], "Ceramic-Tipped_Bolt": [], "Explosive_Bolt": [], "Iron-Tipped_Bolt": [], "Fire_Bolt": [], "Hellfire_Bolt": [], "Repeater": [], "Explosive_Dart": [], "Froating_Mine": [], "Scattershot_Gun": [], "Scattershot": [], "Hullbreaker_Scattershot": [], "Slingshot": [], "Catapult": [], "Hullbreaker_Rock": [], "Fire_Bomb": [], "Green_Death_Bomb": [], "Choking_Cloud": [], "Sulfur_Bomb": [], "Net_Thrower": [], "Hose_Station": [], "Crane": [], "Kite": [], "Rangefinder": [], "Exoskelton": [], "Battle_Fan": [], "Sandbed": [], "Hammock": [], "Bed": [], "Small_Chest": [], "Medium_Chest": [], "Large_Chest": [], "Gigantic_Chest": [], "Small_Water_Bag": [], "Medium_Liquid_Container": [], "Large_Water_Container": [], "Obsidian_Canister": [], "Obsidian_Pot": [], "Ammo_Chest": [], "ClanFlag": [], "Basket_Tall": [], "Carpet_Light": [], "Chair_Simple": [], "Chair_Throne": [], "Chair_Comfortable": [], "Lamp_Standing": [], "Fire_Goblet": [], "Lamp_Double_Hanging": [], "Lamp_Overhanging": [], "Table": [], "Sandbag_Wall": [], "Stone_Wall": [], "Clay_Wall": [], "Cement_Wall": [], "Light_Wood_Wall": [], "Medium_Wood_Wall": [], "Heavy_Wood_Wall_1": [], "Barrier_Base": [], "Defensive_Tower": [], "Rupu_Sling": [], "walkers1": [] };
    const each_user_data = {
        "FF"   :{"Vision_Powder":1,"Desert_Mule":1,"Rupu_Repellent":0,"Jojo_Mojo":0,"Cauterizing_Station":0,"Fury_Fumes":0,"Bonebreaker":0,"Race_Dust":0,"Sinus_Destroyer":0,"Primitive_Bandage":1,"Sterile_Bandage":0,"Fiber_Shirt_and_Trousers":1,"Fiber_Sandals":1,"Fiber_Arm_Wraps":0,"Fiber_Headwrap":1,"Baskwood_Armor":0,"Baskwood_Boots":0,"Baskwood_Bracers":0,"Iron_Studded_Armor":0,"Iron_Studded_Boots":0,"Iron_Studded_Gauntlets":0,"Rupu_Fur_Armor":0,"Rupu_Fur_Sandals":0,"Rupu_Fur_Sleeves":0,"Cloaked_Rupu_Fur_Armor":0,"Triple_Stitch_Armor":0,"Triple_Stitch_Boots":0,"Triple_Stitch_Bracers":0,"Redwood_Wood_Armor":0,"Redwood_Wood_Boots":0,"Redwood_Wood_Brace":0,"Cloak":0,"Foresters_Armor":0,"Foresters_Sandals":0,"Foresters_Sleeves":0,"Brittle_Bone_Armor":0,"Carapace_Armor":0,"Carapace_Boots":0,"Carapace_Gauntlets":0,"Beat_Stick":1,"Bonespike_Sword":1,"Firestone_Bludgeon":0,"Firestone_Kopesh":0,"Short_Malletblade":0,"Wyndan_Sabre":0,"Nibiran_Curved_Dagger":0,"Long_Bonespike_Swordstaff":0,"Sawtooth_Sword":0,"Firestone_Longblade":0,"Singblade":0,"Wyndan_Flame_Sword":0,"Nibiran_Decapitator":0,"Woodcutters_Hatchet":1,"Simple_Pickaxe":1,"Advanced_Pickaxe":0,"Master_Pickaxe":0,"Simple_Repair_Hammer":1,"Simple_Sickle":1,"Scythe":0,"Rawbone_Hand_Axe":1,"Heavy_Rawbone_Hand_Axe":0,"Advanced_Hatchet":0,"Bouldercut_Hand_Axe":0,"Nibiran_Hand_Axe":0,"Firestone_Axe":0,"Rawbone_Battle_Axe":0,"Bouldercut_Battle_Axe":0,"Nibiran_Battle_Axe":0,"Firestone_Battleaxe":0,"Torch":1,"Jaggertooth_Club":0,"Rawbone_Club":0,"Spikebone_Club":0,"Short_Ceramic_Hoofmace":0,"Wyndan_Hammer":0,"Nibiran_Hammer":0,"Jaggertooth_Maul":0,"Rawbone_Maul":0,"Spikebone_Maul":0,"Firestone_Bozdogan":0,"Long_Ceramic_Hoofmace":0,"Wyndan_Warhammer":0,"Nibiran_Warhammer":0,"Blunt_Quarterstaff":0,"Travellers_Staff":0,"Rawbone_Quarterstaff":0,"Firestone_Hammerstaff":0,"Firestone_Bladestaff":0,"Paddleblade_Quarterstaff":0,"Wyndanblade_Quarterstaff":0,"Nibiran_Quarterstaff":0,"Ironblade_Quarterstaff":0,"Javelin":0,"Firebomb":0,"Throwing_Net":0,"Repaired_Grappling_Hook":1,"Fast_Grappling_Hook":0,"Beltless_Grappling_Hook":0,"Torque_Backpack":0,"Long_Grappling_Hook":0,"Wingsuit":0,"Feather_Boots":0,"Makeshift_Bottle":1,"Durable_Water_Sack":0,"Split_Durable_Water_Sack":0,"Water_Circulator":0,"Bone_Bottle":0,"Ceramic_Flask":0,"Split_Ceramic_Flask":0,"Obsidian_Flask":0,"Split_Bone_Bottle":0,"Foraging_Pouch":1,"Large_Gathering_Pouch":0,"Light_Backpack":0,"Medium_Backpack":0,"Heavy_Backpack":0,"Torque_battery":0,"Improvised_Bottle":1,"Camp_Fire":1,"Fiberworking_Station":1,"Fiber_Weave":1,"Rope":1,"Advanced_Fiberworking_Station":1,"Nomad_Cloth":1,"Soil_Excavator":0,"Torque_Windmill_icon":0,"Clay":0,"Quarry":0,"Furnace":0,"Advanced_Furnace":0,"Earth_Wax":0,"Stomping_Station":0,"Purified_Water":1,"Water_Condenser":0,"Bone_Glue":0,"Purification_Station":0,"Liquid_Fuel":0,"Woodworking_Station_icon":1,"Fragment":0,"Wood_Shaft":1,"Advanced_Woodworking_Station_icon":0,"Lambermill":0,"Artificer_Woodworking_Station":0,"Reinforced_Plank":0,"Ballista":1,"Remote_Ballista":0,"Flint_Bolt":0,"Bone_Bolt":0,"Ceramic-Tipped_Bolt":0,"Explosive_Bolt":0,"Iron-Tipped_Bolt":0,"Fire_Bolt":0,"Hellfire_Bolt":0,"Repeater":0,"Explosive_Dart":0,"Froating_Mine":0,"Scattershot_Gun":0,"Scattershot":0,"Hullbreaker_Scattershot":0,"Slingshot":0,"Catapult":0,"Hullbreaker_Rock":0,"Fire_Bomb":0,"Green_Death_Bomb":0,"Choking_Cloud":0,"Sulfur_Bomb":0,"Net_Thrower":0,"Hose_Station":0,"Crane":0,"Kite":0,"Rangefinder":1,"Exoskelton":0,"Battle_Fan":0,"Sandbed":1,"Hammock":1,"Bed":0,"Small_Chest":1,"Medium_Chest":0,"Large_Chest":0,"Gigantic_Chest":0,"Small_Water_Bag":0,"Medium_Liquid_Container":0,"Large_Water_Container":0,"Obsidian_Canister":0,"Obsidian_Pot":0,"Ammo_Chest":0,"ClanFlag":0,"Basket_Tall":0,"Carpet_Light":0,"Chair_Simple":0,"Chair_Throne":0,"Chair_Comfortable":0,"Lamp_Standing":0,"Fire_Goblet":0,"Lamp_Double_Hanging":0,"Lamp_Overhanging":0,"Table":0,"Sandbag_Wall":1,"Stone_Wall":1,"Clay_Wall":0,"Cement_Wall":0,"Light_Wood_Wall":1,"Medium_Wood_Wall":0,"Heavy_Wood_Wall_1":0,"Barrier_Base":0,"Defensive_Tower":0,"Rupu_Sling":0,"walkers1":0},
        "kaeru":{"Vision_Powder":1,"Desert_Mule":1,"Rupu_Repellent":0,"Jojo_Mojo":1,"Cauterizing_Station":1,"Fury_Fumes":1,"Bonebreaker":0,"Race_Dust":0,"Sinus_Destroyer":0,"Primitive_Bandage":1,"Sterile_Bandage":1,"Fiber_Shirt_and_Trousers":1,"Fiber_Sandals":1,"Fiber_Arm_Wraps":1,"Fiber_Headwrap":1,"Baskwood_Armor":1,"Baskwood_Boots":0,"Baskwood_Bracers":0,"Iron_Studded_Armor":0,"Iron_Studded_Boots":0,"Iron_Studded_Gauntlets":0,"Rupu_Fur_Armor":1,"Rupu_Fur_Sandals":1,"Rupu_Fur_Sleeves":1,"Cloaked_Rupu_Fur_Armor":1,"Triple_Stitch_Armor":1,"Triple_Stitch_Boots":1,"Triple_Stitch_Bracers":1,"Redwood_Wood_Armor":0,"Redwood_Wood_Boots":0,"Redwood_Wood_Brace":0,"Cloak":0,"Foresters_Armor":1,"Foresters_Sandals":1,"Foresters_Sleeves":1,"Brittle_Bone_Armor":1,"Carapace_Armor":0,"Carapace_Boots":0,"Carapace_Gauntlets":0,"Beat_Stick":1,"Bonespike_Sword":1,"Firestone_Bludgeon":0,"Firestone_Kopesh":0,"Short_Malletblade":0,"Wyndan_Sabre":0,"Nibiran_Curved_Dagger":0,"Long_Bonespike_Swordstaff":1,"Sawtooth_Sword":1,"Firestone_Longblade":0,"Singblade":1,"Wyndan_Flame_Sword":0,"Nibiran_Decapitator":0,"Woodcutters_Hatchet":1,"Simple_Pickaxe":1,"Advanced_Pickaxe":0,"Master_Pickaxe":0,"Simple_Repair_Hammer":1,"Simple_Sickle":1,"Scythe":1,"Rawbone_Hand_Axe":1,"Heavy_Rawbone_Hand_Axe":1,"Advanced_Hatchet":0,"Bouldercut_Hand_Axe":0,"Nibiran_Hand_Axe":0,"Firestone_Axe":0,"Rawbone_Battle_Axe":1,"Bouldercut_Battle_Axe":0,"Nibiran_Battle_Axe":0,"Firestone_Battleaxe":0,"Torch":1,"Jaggertooth_Club":1,"Rawbone_Club":1,"Spikebone_Club":1,"Short_Ceramic_Hoofmace":0,"Wyndan_Hammer":0,"Nibiran_Hammer":0,"Jaggertooth_Maul":1,"Rawbone_Maul":1,"Spikebone_Maul":0,"Firestone_Bozdogan":0,"Long_Ceramic_Hoofmace":0,"Wyndan_Warhammer":0,"Nibiran_Warhammer":0,"Blunt_Quarterstaff":1,"Travellers_Staff":1,"Rawbone_Quarterstaff":1,"Firestone_Hammerstaff":0,"Firestone_Bladestaff":0,"Paddleblade_Quarterstaff":1,"Wyndanblade_Quarterstaff":0,"Nibiran_Quarterstaff":0,"Ironblade_Quarterstaff":0,"Javelin":1,"Firebomb":0,"Throwing_Net":1,"Repaired_Grappling_Hook":1,"Fast_Grappling_Hook":1,"Beltless_Grappling_Hook":0,"Torque_Backpack":0,"Long_Grappling_Hook":1,"Wingsuit":0,"Feather_Boots":0,"Makeshift_Bottle":1,"Durable_Water_Sack":1,"Split_Durable_Water_Sack":0,"Water_Circulator":0,"Bone_Bottle":1,"Ceramic_Flask":0,"Split_Ceramic_Flask":0,"Obsidian_Flask":0,"Split_Bone_Bottle":1,"Foraging_Pouch":1,"Large_Gathering_Pouch":1,"Light_Backpack":1,"Medium_Backpack":1,"Heavy_Backpack":0,"Torque_battery":1,"Improvised_Bottle":1,"Camp_Fire":1,"Fiberworking_Station":1,"Fiber_Weave":1,"Rope":1,"Advanced_Fiberworking_Station":1,"Nomad_Cloth":1,"Soil_Excavator":1,"Torque_Windmill_icon":1,"Clay":0,"Quarry":0,"Furnace":1,"Advanced_Furnace":0,"Earth_Wax":1,"Stomping_Station":1,"Purified_Water":1,"Water_Condenser":0,"Bone_Glue":1,"Purification_Station":1,"Liquid_Fuel":0,"Woodworking_Station_icon":1,"Fragment":1,"Wood_Shaft":1,"Advanced_Woodworking_Station_icon":0,"Lambermill":0,"Artificer_Woodworking_Station":0,"Reinforced_Plank":0,"Ballista":1,"Remote_Ballista":1,"Flint_Bolt":1,"Bone_Bolt":1,"Ceramic-Tipped_Bolt":0,"Explosive_Bolt":0,"Iron-Tipped_Bolt":0,"Fire_Bolt":1,"Hellfire_Bolt":0,"Repeater":1,"Explosive_Dart":0,"Froating_Mine":0,"Scattershot_Gun":1,"Scattershot":1,"Hullbreaker_Scattershot":1,"Slingshot":0,"Catapult":0,"Hullbreaker_Rock":0,"Fire_Bomb":0,"Green_Death_Bomb":0,"Choking_Cloud":0,"Sulfur_Bomb":0,"Net_Thrower":0,"Hose_Station":0,"Crane":0,"Kite":0,"Rangefinder":1,"Exoskelton":0,"Battle_Fan":0,"Sandbed":1,"Hammock":1,"Bed":1,"Small_Chest":1,"Medium_Chest":1,"Large_Chest":1,"Gigantic_Chest":0,"Small_Water_Bag":1,"Medium_Liquid_Container":1,"Large_Water_Container":1,"Obsidian_Canister":0,"Obsidian_Pot":0,"Ammo_Chest":1,"ClanFlag":1,"Basket_Tall":1,"Carpet_Light":1,"Chair_Simple":1,"Chair_Throne":0,"Chair_Comfortable":0,"Lamp_Standing":1,"Fire_Goblet":0,"Lamp_Double_Hanging":1,"Lamp_Overhanging":1,"Table":0,"Sandbag_Wall":1,"Stone_Wall":1,"Clay_Wall":1,"Cement_Wall":0,"Light_Wood_Wall":1,"Medium_Wood_Wall":1,"Heavy_Wood_Wall_1":0,"Barrier_Base":1,"Defensive_Tower":1,"Rupu_Sling":1,"walkers1":0},
        "kagura":{"Vision_Powder":1,"Desert_Mule":1,"Rupu_Repellent":0,"Jojo_Mojo":0,"Cauterizing_Station":0,"Fury_Fumes":0,"Bonebreaker":0,"Race_Dust":0,"Sinus_Destroyer":0,"Primitive_Bandage":1,"Sterile_Bandage":1,"Fiber_Shirt_and_Trousers":1,"Fiber_Sandals":1,"Fiber_Arm_Wraps":1,"Fiber_Headwrap":1,"Baskwood_Armor":1,"Baskwood_Boots":0,"Baskwood_Bracers":0,"Iron_Studded_Armor":0,"Iron_Studded_Boots":0,"Iron_Studded_Gauntlets":0,"Rupu_Fur_Armor":0,"Rupu_Fur_Sandals":0,"Rupu_Fur_Sleeves":0,"Cloaked_Rupu_Fur_Armor":0,"Triple_Stitch_Armor":0,"Triple_Stitch_Boots":0,"Triple_Stitch_Bracers":0,"Redwood_Wood_Armor":0,"Redwood_Wood_Boots":0,"Redwood_Wood_Brace":0,"Cloak":0,"Foresters_Armor":1,"Foresters_Sandals":1,"Foresters_Sleeves":1,"Brittle_Bone_Armor":0,"Carapace_Armor":0,"Carapace_Boots":0,"Carapace_Gauntlets":0,"Beat_Stick":1,"Bonespike_Sword":1,"Firestone_Bludgeon":0,"Firestone_Kopesh":0,"Short_Malletblade":0,"Wyndan_Sabre":0,"Nibiran_Curved_Dagger":0,"Long_Bonespike_Swordstaff":0,"Sawtooth_Sword":0,"Firestone_Longblade":0,"Singblade":0,"Wyndan_Flame_Sword":0,"Nibiran_Decapitator":0,"Woodcutters_Hatchet":1,"Simple_Pickaxe":1,"Advanced_Pickaxe":0,"Master_Pickaxe":0,"Simple_Repair_Hammer":0,"Simple_Sickle":1,"Scythe":1,"Rawbone_Hand_Axe":1,"Heavy_Rawbone_Hand_Axe":1,"Advanced_Hatchet":0,"Bouldercut_Hand_Axe":0,"Nibiran_Hand_Axe":0,"Firestone_Axe":0,"Rawbone_Battle_Axe":0,"Bouldercut_Battle_Axe":0,"Nibiran_Battle_Axe":0,"Firestone_Battleaxe":0,"Torch":1,"Jaggertooth_Club":0,"Rawbone_Club":0,"Spikebone_Club":0,"Short_Ceramic_Hoofmace":0,"Wyndan_Hammer":0,"Nibiran_Hammer":0,"Jaggertooth_Maul":0,"Rawbone_Maul":0,"Spikebone_Maul":0,"Firestone_Bozdogan":0,"Long_Ceramic_Hoofmace":0,"Wyndan_Warhammer":0,"Nibiran_Warhammer":0,"Blunt_Quarterstaff":0,"Travellers_Staff":0,"Rawbone_Quarterstaff":0,"Firestone_Hammerstaff":0,"Firestone_Bladestaff":0,"Paddleblade_Quarterstaff":0,"Wyndanblade_Quarterstaff":0,"Nibiran_Quarterstaff":0,"Ironblade_Quarterstaff":0,"Javelin":0,"Firebomb":0,"Throwing_Net":0,"Repaired_Grappling_Hook":1,"Fast_Grappling_Hook":0,"Beltless_Grappling_Hook":0,"Torque_Backpack":0,"Long_Grappling_Hook":0,"Wingsuit":0,"Feather_Boots":0,"Makeshift_Bottle":1,"Durable_Water_Sack":1,"Split_Durable_Water_Sack":0,"Water_Circulator":0,"Bone_Bottle":1,"Ceramic_Flask":0,"Split_Ceramic_Flask":0,"Obsidian_Flask":0,"Split_Bone_Bottle":0,"Foraging_Pouch":1,"Large_Gathering_Pouch":1,"Light_Backpack":1,"Medium_Backpack":0,"Heavy_Backpack":0,"Torque_battery":1,"Improvised_Bottle":1,"Camp_Fire":1,"Fiberworking_Station":1,"Fiber_Weave":1,"Rope":1,"Advanced_Fiberworking_Station":1,"Nomad_Cloth":1,"Soil_Excavator":1,"Torque_Windmill_icon":1,"Clay":1,"Quarry":0,"Furnace":1,"Advanced_Furnace":0,"Earth_Wax":1,"Stomping_Station":1,"Purified_Water":1,"Water_Condenser":0,"Bone_Glue":1,"Purification_Station":0,"Liquid_Fuel":0,"Woodworking_Station_icon":1,"Fragment":0,"Wood_Shaft":1,"Advanced_Woodworking_Station_icon":0,"Lambermill":0,"Artificer_Woodworking_Station":0,"Reinforced_Plank":0,"Ballista":1,"Remote_Ballista":1,"Flint_Bolt":0,"Bone_Bolt":0,"Ceramic-Tipped_Bolt":0,"Explosive_Bolt":0,"Iron-Tipped_Bolt":0,"Fire_Bolt":0,"Hellfire_Bolt":0,"Repeater":0,"Explosive_Dart":0,"Froating_Mine":0,"Scattershot_Gun":0,"Scattershot":0,"Hullbreaker_Scattershot":0,"Slingshot":0,"Catapult":0,"Hullbreaker_Rock":0,"Fire_Bomb":0,"Green_Death_Bomb":0,"Choking_Cloud":0,"Sulfur_Bomb":0,"Net_Thrower":0,"Hose_Station":0,"Crane":0,"Kite":0,"Rangefinder":1,"Exoskelton":0,"Battle_Fan":0,"Sandbed":1,"Hammock":0,"Bed":0,"Small_Chest":1,"Medium_Chest":1,"Large_Chest":0,"Gigantic_Chest":0,"Small_Water_Bag":1,"Medium_Liquid_Container":0,"Large_Water_Container":0,"Obsidian_Canister":0,"Obsidian_Pot":0,"Ammo_Chest":1,"ClanFlag":0,"Basket_Tall":0,"Carpet_Light":0,"Chair_Simple":0,"Chair_Throne":0,"Chair_Comfortable":0,"Lamp_Standing":0,"Fire_Goblet":0,"Lamp_Double_Hanging":0,"Lamp_Overhanging":0,"Table":0,"Sandbag_Wall":1,"Stone_Wall":1,"Clay_Wall":0,"Cement_Wall":0,"Light_Wood_Wall":1,"Medium_Wood_Wall":1,"Heavy_Wood_Wall_1":0,"Barrier_Base":0,"Defensive_Tower":0,"Rupu_Sling":0,"walkers1":0}
    };

    // 習得データを集計
    for (let key in all_learned_data) {
        for (let user in each_user_data) {
            if (each_user_data[user][key] == 1)
                all_learned_data[key].push(user);
        }
    }

    // 各アイテムの拾得者情報追加
    for (let key in all_learned_data) {

        // ユーザーリスト要素取得
        var ul = document.getElementById(key);

        if (ul == null) continue;

        //拾得ユーザー人数取得
        var learnedNum = all_learned_data[key].length;

        // 習得ユーザーリスト表示
        if (learnedNum >= 10) {
            // 10人以上なら個人名を表示しない
            var li = document.createElement('li');
            li.innerHTML = "10人以上";
            ul.appendChild(li);
        }
        else {
            // 10人未満なら個人名を表示
            for (let i = 0; i < learnedNum; i++) {
                var name = all_learned_data[key][i];
                var li = document.createElement('li');
                li.innerHTML = name;
                ul.appendChild(li);
            }
        }

        // 習得ユーザー数表示
        var num_li = ul.previousElementSibling;
        num_li.innerHTML = "習得済み:" + learnedNum;
        console.log(learnedNum);
        if (learnedNum == 0) {
            console.log("hi");
            num_li.style.backgroundColor = "dimgray";
        }
    }
}
