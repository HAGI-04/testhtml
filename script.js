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
        console.log("test");
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
    const equipment_data = JSON.parse(window.localStorage.getItem("equipment"));
    const crafting_data = JSON.parse(window.localStorage.getItem("crafting"));
    const construction_data = JSON.parse(window.localStorage.getItem("construction"));
    const walkers_data = JSON.parse(window.localStorage.getItem("walkers"));

    // 警告文処理
    var err_message = "";
    if (vitamins_data == null) err_message += "vitamins_data is null\n";
    if (equipment_data == null) err_message += "equipment_data is null\n";
    if (crafting_data == null) err_message += "crafting_data is null\n";
    if (construction_data == null) err_message += "construction_data is null\n";
    if (walkers_data == null) err_message += "walkers_data is null\n";

    //警告文ポップとダウンロードの処理
    if (!(err_message == ""))
        alert(err_message);
    else {
        // userデータ保存
        window.localStorage.setItem("selectedUser", JSON.stringify(user_name));

        // 辞書結合
        const output = Object.assign(vitamins_data, equipment_data, crafting_data, construction_data, walkers_data);

        let blob = new Blob([JSON.stringify(output)], { type: "text/plain" });
        link.download = user_name + "_treedata.txt"
        link.href = window.URL.createObjectURL(blob);
    }
}

function showLearnedData() {
    var all_learned_data = { "Vision_Powder": [], "Desert_Mule": [], "Rupu_Repellent": [], "Jojo_Mojo": [], "Cauterizing_Station": [], "Fury_Fumes": [], "Bonebreaker": [], "Race_Dust": [], "Sinus_Destroyer": [], "equipment1": [], "crafting1": [], "construction1": [], "walkers1": [] };
    const each_user_data = {
        "FF": { "Vision_Powder": 1, "Desert_Mule": 1, "Rupu_Repellent": 0, "Jojo_Mojo": 1, "Cauterizing_Station": 1, "Fury_Fumes": 0, "Bonebreaker": 0, "Race_Dust": 0, "Sinus_Destroyer": 1, "equipment1": 0, "crafting1": 0, "construction1": 1, "walkers1": 1 },
        "esta": { "Vision_Powder": 0, "Desert_Mule": 0, "Rupu_Repellent": 0, "Jojo_Mojo": 1, "Cauterizing_Station": 0, "Fury_Fumes": 0, "Bonebreaker": 1, "Race_Dust": 0, "Sinus_Destroyer": 0, "equipment1": 0, "crafting1": 0, "construction1": 1, "walkers1": 1 },
        "Tkm3": { "Vision_Powder": 1, "Desert_Mule": 0, "Rupu_Repellent": 1, "Jojo_Mojo": 1, "Cauterizing_Station": 1, "Fury_Fumes": 1, "Bonebreaker": 1, "Race_Dust": 0, "Sinus_Destroyer": 0, "equipment1": 0, "crafting1": 1, "construction1": 1, "walkers1": 1 }
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

        //拾得ユーザー人数取得
        var learnedNum = all_learned_data[key].length;

        // 習得ユーザーリスト表示
        for (let i = 0; i < learnedNum; i++) {
            var name = all_learned_data[key][i];
            var li = document.createElement('li');
            li.innerHTML = name;
            ul.appendChild(li);
        }

        // 習得ユーザー数表示
        var num_li = ul.previousElementSibling;
        num_li.innerHTML = "習得済み:" + learnedNum;
        if (learnedNum == 0) {
            console.log(num_li);
            num_li.style.backgroundColor = "dimgray";
        }
    }
}