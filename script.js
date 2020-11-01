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