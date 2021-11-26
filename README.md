﻿# [AzurLaneFleet](https://x94fujo6rpg.github.io/AzurLaneFleet/) #  
The goal of this project  
Is just for easily share fleet configuration in one shot  
![](https://x94fujo6rpg.github.io/AzurLaneFleet/ui/screenshots.jpg)  
```
No4RgBgDg3IGigTgCy0UgzANghza+ATHsprALrzjSwQCseSYkeb8bVNMs5H-7CBS7c6JARKHVIPCLkkCuMugHZBk4fDAjRsQus7UDiows4ika3AmNTgtjlwdCq2igEIIAOgbuARgAm9GAqKkT0AGZQ4REAhihEUADGfkR+SQCmKSpg2GCpYEA
```

### [CN Wiki version](https://wiki.biligame.com/blhx/%E8%88%B0%E9%98%9F%E6%A8%A1%E6%8B%9F%E5%99%A8) is online ###  
***Caution! Data stored in two versions are not compatible!***  
AzurLaneFleet now shoud load data from CN Wiki version **(irreversible)**  

### Related userscripts ###
for CN WIKI
- 碧航艦隊科技工具 [github](https://github.com/x94fujo6rpg/SomeTampermonkeyScripts/blob/master/az_cn_wiki_fleet_tech_tool.user.js) / [greasyfork](https://greasyfork.org/scripts/435568)
- 還原艦船名稱 [greasyfork](https://greasyfork.org/scripts/405281)

# Browser support
Recommend using `Chrome` for the best experience  
This site was developed and tested on `Chrome`/`Firefox`  
`IE` `Edge(Old)` is unsupported  
Compatibility with other browsers is unknown  

## Update  
**2021-11-26**
- improve handling when invalid data is loaded  
  it will still load the formation and show successful, error message displayed in console
  - ship: stop load and skip rest equip
  - equip: skip
- now we shoud be able to load the data generated by CN Wiki **(irreversible)**
- add `collab` to filter nation section
  - collab `ship/equip` now will not be selected by `other`

**2021-11-25**
- fold setting/filter
- new feature: only show owned ship/equipment

**2021-11-23**
- now the last sorting method will be marked
- now the `sort order` button will also trigger sorting
- `Fleet ID / Edit Button` & `Fleet Border` now enabled by default

**2021-11-01**
- useing TW name data. if not found, convert from CN
- unreleased ship name marked with `*` *(on that server)*
- now can use `TWnoData`/`ENnoData` to find unreleased ships *(on that server)*
- normalize some of the ship names (so that they can be searched with normal letters)
  | Original                | Normalized              |
  |-------------------------|-------------------------|
  | Algérie                 | Algerie                 |
  | La Galissonnière        | La Galissonniere        |
  | Béarn                   | Bearn                   |
  | Émile Bertin            | Emile Bertin            |
  | Maillé Brézé            | Maille Breze            |
  | L'Opiniâtre             | L'Opiniatre             |
  | Le Téméraire            | Le Temeraire            |
  | Ägir                    | Agir                    |
  | Friedrich der Große     | Friedrich der Grosse    |
  | Nürnberg                | Nurnberg                |
  | Köln                    | Koln                    |
  | Königsberg              | Konigsberg              |
  | Hermann Künne (Z19)     | Hermann Kunne (Z19)     |
  
  *both of them are supported

**2021-10-12**
- add sorting

**2021-10-07**
- due to some change, old tools are no longer suitable  
  for various reasons, no tool will be release in the future  

**2021-08-05**
- add new feature: swap ship position  
  ![](https://github.com/x94fujo6rpg/AzurLaneFleet/raw/master/ui/swap.gif)  

**2021-05-26**
- fix indexedDB issue

**2021-05-21**
- fix `allow duplicate` `thick frame` not work on Firefox
- fix stuck when image cache not found
- update error message when indexedDB is unavailable

**2021-05-20**
- no longer use cookie, all setting now save in localStorage  
  so the settings work in local environment too  

**2021-05-18**
- display message at the bottom
- limit fleet size to `30`

**2021-05-17**
- fix & actually using vue to handle layout  
  now it will really respond to any added fleet  
- add button to turn on/off
  - `Fleet ID / Edit Button`
  - `Fleet Border`
- Now can generate shareable URL
  - `limit` URL length limit is **2000**, which is about `28~30` fleet with all equip
- no longer hide scrollbar because we can have so many fleet now
- Dynamic fleet
  - add `Copy`, now can copy fleet
  - improve speed (skip unnecessary action when load fleet)
    - `for...in` `forEach` ... this kind method is slower than the traditional `for (i++)`
      but it way more readable & easier to debug...
  - hide buttom, now only display when hover on it
  - ~~limit to 10 fleet~~
    ```
    the causes of this problem is the id system I use...

    old id:_0123 => fleet:0, side:1, pos:2, item:3

    when you have over 10 fleet...
    _10123 => fleet:1?...0? but it already exist...???
    what a classic mistake...

    new id
    999_1_2_3 => id.split("_") => [999,1,2,3]
    ```

**2021-05-16**
~~(giuhub just exploded, no one can build right now...)~~  
- Dynamic fleet
  - `Normal` add normal fleet to top/bottom
  - `Sub` add Submarine fleet to top/bottom
  - `X` delete fleet (min fleet count 1)
  - Compatible with old data (v0.04)

**2021-05-13**
- better auto adjust UI (no longer force use code)
- equip filter
  - clear: remove all filter setting
  - default: filter low rarity/tier equip
  - auto: auto use default
- auto focus to search input
- show ship position
- frame switch

**2021-05-12**
- auto adjust some UI to small screen  
  ~~if window is too small and language is en, force filter enable code mode~~
- auto clear name after save fleet
- convert redundant buttons to single button
- replace old align attr

**2021-05-11**
- adjust some UI
- more UI text will correspond to the settings
- filter now can set to [ship & nation code](https://github.com/x94fujo6rpg/AzurLaneFleet#code)
- fix result count not work when use search
- split nation to 2 line
- fix some text to match en wiki

**2021-05-10**
- reduce server traffic (use [idb(indexedDB)](https://github.com/jakearchibald/idb) to cache/load images)

**2021-05-07**
- add TW (Traditional Chinese)
  - convert from CN cause TW server missing some data
- add result count for ship
- use EN as default language
- use correct EN name instead of convert from this  
  ![](https://i.imgur.com/w0MOsdK.png)  
  now the search support this name too  

**2021-05-06**
- add layout switch
- auto save&load option

**2021-05-04**
- now can save/load/remove fleet in local
- filter now use set

**2021-05-03**
- add search for ship name, support CN/EN/JP
- 4 normal + submarine fleet
- compress data string

**2021-04-30**
- add option for duplicate ship

**2020-11-27**  
- fix filter issue  
- add ship/equip (event 2020-11-26)  

**2020-09-24**  
- improve data export/import  
- add a button to remove all ship at once  
- auto save&load setting via cookie  
  
**2020-09-20**  
- fix BBV not showing  
- for the BBV, add [other] type to back too  
- now showing BB main gun base  
- correctly limit equip  
  
**2020-09-18**  
- new ship/equip added  
(I have to wait until EN server updated to get the translation of new equip)  
- add [other] type to front filter for new ship  
- display full name when cursor on the ship/equip  
  
**2020-09-02**  
- new version  
- check duplicate ship/equip  
- add import/export setting  

## Code  
[Hull classification symbol](https://en.wikipedia.org/wiki/Hull_classification_symbol)  

| TW&CN 	| JP       	| EN                	| CODE  	|
|-------	|----------	|-------------------	|-------	|
| 潛艇  	| 潜水艦   	| Submarine         	| SS    	|
| 潛母  	| 潜水空母 	| Submarine Carrier 	| SSV   	|
| 驅逐  	| 駆逐     	| Destroyer         	| DD    	|
| 輕巡  	| 軽巡     	| Light Cruiser     	| CL    	|
| 重巡  	| 重巡     	| Heavy Cruiser     	| CA    	|
| 超巡  	| 超甲巡   	| Large Cruiser     	| CB    	|
| 戰巡  	| 巡洋戦艦 	| Battle Cruiser    	| BC    	|
| 戰列  	| 戦艦     	| Battle Ship       	| BB    	|
| 輕航  	| 軽空母   	| Light Carrier     	| CVL   	|
| 航母  	| 空母     	| Carrier           	| CV    	|
| 重砲  	| 砲艦     	| Monitor           	| BM    	|
| 維修  	| 工作     	| Repair Ship       	| AR    	|
| 其他  	| その他   	| Other             	| Other 	|

| TW&CN    	| JP       	| EN                  	| CODE     	|
|----------	|----------	|---------------------	|----------	|
| 白鷹     	| ユニオン 	| Eagle Union         	| USS      	|
| 皇家     	| ロイヤル 	| Royal Navy          	| HMS      	|
| 重櫻     	| 重桜     	| Sakura Empire       	| IJN      	|
| 鐵血     	| 鉄血     	| Iron Blood          	| KMS      	|
| 東煌     	| 東煌     	| Dragon Empery       	| PRAN/ROC 	|
| 撒丁帝國 	| サディア 	| Sardegna Empire     	| RN       	|
| 北方聯合 	| 北連     	| Northern Parliament 	| SN       	|
| 自由鳶尾 	| アイリス 	| Iris Libre          	| FFNF     	|
| 維希教廷 	| ヴィシア 	| Vichya Dominion     	| MNF      	|
| 其他     	| その他   	| Other               	| Other    	|

## Data source  
- [AzurLaneSourceJson](https://github.com/nobbyfix/AzurLaneSourceJson)  
- [AzurLaneData](https://github.com/Dimbreath/AzurLaneData)  
- [AzurLaneTools](https://github.com/AzurLaneTools)  
