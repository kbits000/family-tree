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

            // These dimensions control the size of the image and its border within the node SVG
            const imageWidth = 100;
            const imageHeight = 100;
            const borderRadius = 10; // For the clipPath
            const borderWidth = 5; // For the visible border

            // Calculate position for the text to be below the image + border
            const textY = imageHeight + borderWidth + 20; // 20 units padding below image/border

            // Define the border color
            const borderColor = d.data.gender === 'male' ? '#9fe1f3ff' : 'pink';

            if (d.data.parentId === null) {
                let spouseObject;
                if (d.data.isHusband || d.data.isWife) {
                    const spouseId = d.data.isHusband ? d.data.wifeId : d.data.husbandId;
                    const spouse = data.find(p => p.id === spouseId);
                    if (spouse) {
                        spouseObject = spouse;
                    }
                }

                if (spouseObject) {
                    return (
                    `
                     <div style="
                         display: flex;
                         flex-direction: column;
                         align-items: center;
                         justify-content: center;
                         width: 100%;
                         height: 100%;
                         text-align: center;
                         ">
                         <div style="
                             display: flex;
                             align-items: center;
                             justify-content: center;
                             margin-bottom: 5px;
                             ">
                             <div style="
                                 border: ${borderWidth}px solid blue;
                                 border-radius: ${borderRadius}px;
                                 overflow: hidden; /* To clip the image inside */
                                 width: ${imageWidth}px;
                                 height: ${imageHeight}px;
                                 display: flex; /* For image centering if needed */
                                 align-items: center;
                                 justify-content: center;
                                 ">
                                 <img src="names/${d.data.name}_name.png" 
                                      alt="${d.data.fullName}" 
                                      style="width: 100%; height: 100%; object-fit: cover; border-radius: ${borderRadius - 2}px;"/>
                             </div>
                             <span style="font-size: 30px; margin: 0 10px;">+</span>
                             <div style="
                                 border: ${borderWidth}px solid pink;
                                 border-radius: ${borderRadius}px;
                                 overflow: hidden;
                                 width: ${imageWidth}px;
                                 height: ${imageHeight}px;
                                 display: flex;
                                 align-items: center;
                                 justify-content: center;
                                 ">
                                 <img src="names/${spouseObject.name}_name.png" 
                                      alt="${spouseObject.fullName}" 
                                      style="width: 100%; height: 100%; object-fit: cover; border-radius: ${borderRadius - 2}px;"/>
                             </div>
                         </div>
                         <div style="font-size: 20px; font-weight: bold;">
                             ${d.data.fullName} + ${spouseObject.fullName}
                         </div>
                     </div>
                     `
                    );
                }

                return (
                    `
                    <svg width="${imageWidth + (borderWidth * 2) + 20}"
                        height="${imageHeight + (borderWidth * 2) + 50}"
                        viewBox="0 0 ${imageWidth + (borderWidth * 2)} ${imageHeight + (borderWidth * 2) + 40}
                        xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="rounded-clip-${d.data.id}">
                                <rect x="${borderWidth}" y="${borderWidth}" 
                                        width="${imageWidth}" height="${imageHeight}" 
                                        rx="${borderRadius}" ry="${borderRadius}"/>
                            </clipPath>
                        </defs>
                        <rect x="${borderWidth}" y="${borderWidth}" 
                            width="${imageWidth + (borderWidth * 2)-borderRadius+2}" height="${imageHeight + (borderWidth * 2)-borderRadius+2}" 
                            rx="${borderRadius + borderWidth}" ry="${borderRadius + borderWidth}"
                            fill="none" 
                            stroke="${borderColor}" 
                            stroke-width="${borderWidth}"/>
                        
                        <image x="${borderWidth}" y="${borderWidth}"
                                width="${imageWidth}" height="${imageHeight}" 
                                clip-path="url(#rounded-clip-${d.data.id})"
                                preserveAspectRatio="xMidYMid slice"
                                xlink:href="names/${d.data.name}_name.png" />
                        <text x="${(imageWidth + (borderWidth * 2)) / 2}" y="${textY}" 
                            font-size="20" fill="black" text-anchor="middle">
                            ${d.data.fullName}
                        </text>
                    </svg> 
                `
                );
            }

            if (d.data.isWife === true) {
                console.log('wife: ' + d.data.isWife + ' wife id : ' + d.data.husbandId + ' person id ' + d.data.id);
                g = g + (
                    `
                    <svg width="${imageWidth + (borderWidth * 2) + 20}"
                        height="${imageHeight + (borderWidth * 2) + 50}"
                        viewBox="0 0 ${imageWidth + (borderWidth * 2)} ${imageHeight + (borderWidth * 2) + 40}
                        xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="rounded-clip-${d.data.id}">
                                <rect x="${borderWidth}" y="${borderWidth}" 
                                        width="${imageWidth}" height="${imageHeight}" 
                                        rx="${borderRadius}" ry="${borderRadius}"/>
                            </clipPath>
                        </defs>
                        <rect x="0" y="0" 
                            width="${imageWidth + (borderWidth * 2)}" height="${imageHeight + (borderWidth * 2)}" 
                            rx="${borderRadius + borderWidth}" ry="${borderRadius + borderWidth}"
                            fill="none" 
                            stroke="${borderColor}" 
                            stroke-width="${borderWidth}"/>
                        
                        <image x="${borderWidth}" y="${borderWidth} 
                                width="${imageWidth}" height="${imageHeight}" 
                                clip-path="url(#rounded-clip-${d.data.id})"
                                preserveAspectRatio="xMidYMid slice"
                                xlink:href="names/${d.data.name}_name.png" />
                        <text x="${(imageWidth + (borderWidth * 2)) / 2}" y="${textY}" 
                            font-size="20" fill="black" text-anchor="middle">
                            ${d.data.fullName}
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


            // return `${d.data.name}`;
            return (
                `
                    <svg width="${imageWidth + (borderWidth * 2) + 20}"
                        height="${imageHeight + (borderWidth * 2) + 50}"
                        viewBox="0 0 ${imageWidth + (borderWidth * 2)} ${imageHeight + (borderWidth * 2) + 40}
                        xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="rounded-clip-${d.data.id}">
                                <rect x="${borderWidth}" y="${borderWidth}" 
                                        width="${imageWidth}" height="${imageHeight}" 
                                        rx="${borderRadius}" ry="${borderRadius}"/>
                            </clipPath>
                        </defs>
                        <rect x="${borderWidth}" y="${borderWidth}" 
                            width="${imageWidth + (borderWidth * 2)-borderRadius+2}" height="${imageHeight + (borderWidth * 2)-borderRadius+2}" 
                            rx="${borderRadius + borderWidth}" ry="${borderRadius + borderWidth}"
                            fill="none" 
                            stroke="${borderColor}" 
                            stroke-width="${borderWidth}"/>
                        
                        <image x="${borderWidth}" y="${borderWidth}"
                                width="${imageWidth}" height="${imageHeight}" 
                                clip-path="url(#rounded-clip-${d.data.id})"
                                preserveAspectRatio="xMidYMid slice"
                                xlink:href="names/${d.data.name}_name.png" />
                        <text x="${(imageWidth + (borderWidth * 2)) / 2}" y="${textY}" 
                            font-size="20" fill="black" text-anchor="middle">
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