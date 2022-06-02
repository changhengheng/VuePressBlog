<h1 class="beginning"> Hello World！</h1>

庐山烟雨浙江潮，
未到千般恨不消。
及至到来无一事，
庐山烟雨浙江潮。

<Timestamp/>

<GetStarted routerPath="/guide/" pageTitle="食用指南" />
<GetStarted routerPath="/informalessay/" pageTitle="Get Started~" />

<h1>工具箱</h1>
<div>
    <GetStarted routerPath="/mind/" pageTitle="运用心智获得解放" />
    <GetStarted routerPath="/plan/" pageTitle="计划" />
</div>

<h1>工作流</h1>
<div>
    <GetStarted routerPath="/FollowuUpExercise/" pageTitle="跟进练习" />
</div>

<h1>温故而知新</h1>
<nav style="display:flex;justify-content:space-around;flex-warp:wrap;">
    <GetStarted notePath="https://changhengheng.github.io/npmNotes/" pageTitle="NPM" style="flex-shrink:0;margin-left:20px;margin-right:20px" />
    <GetStarted notePath="https://changhengheng.github.io/basisOfCriticalThinking/" pageTitle="批判性思考" style="flex-shrink:0;margin-left:20px;margin-right:20px"/>
    <GetStarted notePath="https://changhengheng.github.io/npmNotes/" pageTitle="NPM" style="flex-shrink:0;margin-left:20px;margin-right:20px" />
    <GetStarted notePath="https://changhengheng.github.io/npmNotes/" pageTitle="NPM" style="flex-shrink:0;margin-left:20px;margin-right:20px" />
</nav>

<h1>导航</h1>
<nav style="display:flex;justify-content:space-around;flex-warp:wrap;">
    <GetStarted routerPath="/tasklibrary/" pageTitle="任务库" style="flex-shrink:0;margin-left:20px;margin-right:20px" />
    <GetStarted routerPath="/inbox/" pageTitle="收集箱" style="flex-shrink:0;margin-left:20px;margin-right:20px" />
    <GetStarted routerPath="/AesopsFables/" pageTitle="伊索寓言" style="flex-shrink:0;margin-left:20px;margin-right:20px" />
    <GetStarted routerPath="/WorldlyWisdom/" pageTitle="普世智慧" style="flex-shrink:0;margin-left:20px;margin-right:20px" />
</nav>

<h1>枕边书</h1>
<Virtual-bookshelf :bookData="[
    {
        bgimage:'https://s6.jpg.cm/2022/05/31/PG6uqk.jpg',
        title:'学习之道',
        author:'[美] 乔希·维茨金',
        id:9787500679240
    },
    {
        bgimage:'https://s6.jpg.cm/2022/05/31/PG6cr8.jpg',
        title:'把时间当做朋友：运用心智获得解放',
        author:'李笑来',
        id:9787121087097
    },
    {
        bgimage:'https://s6.jpg.cm/2022/05/31/PG6VpU.jpg',
        title:'把时间当作朋友（第3版）',
        author:'李笑来',
        id:9787121210273
    },
    {
        bgimage:'https://s6.jpg.cm/2022/05/31/PG68TO.jpg',
        title:'活出生命的意义',
        author:' [奥] 维克多·弗兰克',
        id:9787508058993
    },
    {
        bgimage:'https://s6.jpg.cm/2022/05/31/PG6UCi.jpg',
        title:'成为作家',
        author:'[美] 多萝西娅·布兰德',
        id:9787300130316
    },
    {
        bgimage:'https://s6.jpg.cm/2022/05/31/PG6Xdw.jpg',
        title:'钢琴师：二战期间华沙幸存记',
        author:'(波)瓦迪斯瓦夫·什皮尔曼',
        id:9787020043422
    },
    {
        bgimage:'https://s6.jpg.cm/2022/06/02/PGYvzp.jpg',
        title:'抑郁是因为我想太多吗',
        author:'［丹］皮亚·卡列\n森',
        id:9787111695813
    }
]"/>
