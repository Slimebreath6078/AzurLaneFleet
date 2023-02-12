sb_database_maker = {
    equip_type_dictionary: {
        "1": "Small_Gun",
        "2": "Low-middle_Gun",
        "3": "High-middle_Gun",
        "4": "High-big_Gun",
        "5": "Torpedo",
        "6": "Anti_Air",
        "7": "AirPlane_Combat",
        "8": "AirPlane_Torpedo",
        "9": "AirPlane_Bomb",
        "10": "Auxiliary",
        "11": "Low-big_Gun",
        "12": "Seaplane",
        "13": "Torpedo_Sub",
        "14": "Auxiliary_Vanguard",
        "15": "Auxiliary_Anti_Sub",
        "17": "Auxiliary_Koln",
        "18": "Auxiliary_Munition",
        "20": "Missile",
        "21": "Battle_Anti_Air",
    },
    make_equip_data_list: function () {
        let data_list = [], output_data;
        for (let id in equip_data) {
            let element = equip_data[id];
            data_list.push({ id: element.id, name: this.equip_type_dictionary[element.type], name: element.jp_name });
            //data_list.push(element.id);
        }

        output_data = JSON.stringify(data_list, null, 3);

        const blob = new Blob([output_data], { type: 'text/json' });

        let downloader = document.createElement('a');

        downloader.href = URL.createObjectURL(blob);
        downloader.download = "ADS_AFT_equip_database.json";
        downloader.target = '_blank';

        downloader.click();
    },
    make_ship_data_list: function () {
        let data_list = [], output_data;
        for (let id in ship_data) {
            let element = ship_data[id];
            let eq_list = [];
            const equip_region = [
                element.equip_1[element.equip_1.length - 1],
                element.equip_2[element.equip_2.length - 1],
                element.equip_3[element.equip_3.length - 1],
                element.equip_4[element.equip_4.length - 1],
                element.equip_5[element.equip_5.length - 1],
            ];
            element.eq_p.forEach((element_efficiency, id) => {
                let equip = { key_name: this.equip_type_dictionary[equip_region[id]], efficiency: Math.round(element_efficiency * 100) };
                eq_list.push(equip);
            });
            data_list.push({ id: parseInt(element.uni_id), name: element.jp_name, equip: eq_list });
        }

        output_data = JSON.stringify(data_list, null, 3);

        const blob = new Blob([output_data], { type: 'text/json' });

        let downloader = document.createElement('a');

        downloader.href = URL.createObjectURL(blob);
        downloader.download = "ADS_AFT_ship_database.json";
        downloader.target = '_blank';

        downloader.click();
    }
};