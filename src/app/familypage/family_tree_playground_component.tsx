'use client'

import {OrgChart} from 'd3-org-chart';
import {useEffect, useRef} from 'react';
// import {useState} from 'react';

// import * as d3 from 'd3';

const data = [
    { id: 1, parentId: null, name: 'Adam', gender:'male', fullName: 'Adam', isHusband: true, wifeId: 9 },
    { id: 2, parentId: 1, name: 'Cane', gender: 'male', fullName: 'Cane Adam' },
    { id: 3, parentId: 1, name: 'Abel', gender: 'male', fullName: 'Abel Adam' },
    { id: 4, parentId: 1, name: 'Seth', gender: 'male', fullName: 'Seth Adam' },
    { id: 5, parentId: 4, name: 'Enos', gender: 'male', fullName: 'Enos Seth' },
    { id: 6, parentId: 2, name: 'Enoch', gender: 'male', fullName: 'Enoch Cane' },
    { id: 7, parentId: 1, name: 'Azura', gender: 'female', fullName: 'Azura Adam' },
    { id: 8, parentId: 1, name: 'Aclima', gender: 'female', fullName: 'Aclima Adam' },
    { id: 9, parentId: 1, name: "Eve", gender: 'female', fullName: 'Eve', isWife: true, husbandId: 1 }
];

export default function FamilyTreePlaygroundComponent() {
    const d3Container = useRef(null);
    // const chartRef = useRef(new OrgChart());
    const chartRef = useRef<OrgChart | null>(null);

    const data2 = {
        name: "root",
        children: [
            {name: "child #1"},
            {
                name: "child #2",
                children: [
                    {name: "grandchild #1"},
                    {name: "grandchild #2"},
                    {name: "grandchild #3"}
                ]
            }
        ]
    }



    useEffect(() => {
        chartRef.current = new OrgChart();
        chartRef.current.container(d3Container.current).data(data).nodeWidth(() => 200).nodeHeight(() => 120).onNodeClick((d) => {
            console.log(d, 'Id of clicked node ');
            // props.onNodeClick(d);
        })
        .siblingsMargin((d3Node)=> 50)
        .nodeContent((d) => {
            let g = '';
            let i = 5;
            
            if (d.data.isWife === true) {
                console.log('wife: ' + d.data.isWife + ' wife id : ' + d.data.husbandId + ' person id ' + d.data.id);
                g = g + (
                    `
                    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                        <image x="0" y="0" 
                                width="100" height="100" 
                                style="border-radius:25px;"
                                preserveAspectRatio="xMidYMid slice"
                                xlink:href="names/${d.data.name}_name.png" />
                        <text x="0" y="120" font-size="20" fill="black">
                            ${d.data.name}
                        </text>
                    </svg> 
                    `
                );
            } else if (d.data.isHusband === true) {
                console.log('husband: ' + d.data.isHusband);
                g = g + (
                    `
                    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                        <image x="0" y="0" 
                                width="100" height="100" 
                                style="border-radius:25px;"
                                preserveAspectRatio="xMidYMid slice"
                                xlink:href="names/${d.data.name}_name.png" />
                        <text x="0" y="120" font-size="20" fill="black">
                            ${d.data.name}
                        </text>
                    </svg> 
                    `
                );
            }

            if (d.data.id === 1) {
                return `FATHER ${d.data.name}</br>`
            }
            // return `${d.data.name}`;
            return (
                `
                <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                    <image x="0" y="0" 
                            width="100" height="100" 
                            style="border-radius:25px;"
                            preserveAspectRatio="xMidYMid slice"
                            xlink:href="names/${d.data.name}_name.png" />
                    <text x="0" y="120" font-size="20" fill="black">
                        ${d.data.fullName}                        
                    </text>
                </svg> 
                `
            );

        })
        .compact(false)
        .render();
    }, [data]);

    function handleClick() {
        chartRef.current.compact(false).render().fit();
    }

    function setCompact() {
        chartRef.current.compact(true).render().fit();
    }

    return (
        <>
            <h1>Family tree</h1>
            <button
                type="button"
                onClick={
                    handleClick
                }
            >
                Horizontal
            </button>
            <button
            type="button"
            onClick={setCompact}
            >
                Compact
            </button>
            <div ref={d3Container}/>
        </>
    )
}