'use client'
import React, { useEffect, useRef } from 'react';
import * as f3 from 'family-chart';
import 'family-chart/styles/family-chart.css';
import {Data} from "family-chart";

const FamilyTree = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const data: Data = [
        {
          "id": "1",
          "data": {"first name": "John", "last name": "Doe", "birthday": "1980", "gender": "M"},
          "rels": {"spouses": ["2", "4"], "children": ["3"], parents: []}
        },
        {
          "id": "2",
          "data": {"first name": "Jane", "last name": "Doe", "birthday": "1982", "gender": "F"},
          "rels": {"spouses": ["1"], "children": ["3"], parents: []}
        },
        {
          "id": "3",
          "data": {"first name": "Bob", "last name": "Doe", "birthday": "2005", "gender": "M"},
          "rels": {"parents": ["1", "2"], "spouses": [], "children": []}
        },
        {
          "id": "4",
          "data": {"first name": "Jesse", "last name": "Doe", "birthday": "1988", "gender": "F"},
          "rels": {"spouses": ["1"], "children": [], parents: []}
        },
      ];

      const f3Chart = f3.createChart('#FamilyChart', data)

      f3Chart.setCardHtml();

      f3Chart.updateTree({initial: true});
    }
  }, []);

  return <div className="f3" id="FamilyChart" ref={chartRef} style={{width: '100%', height: '900px', margin: 'auto', backgroundColor: 'rgb(33,33,33)', color: '#fff'}} />;
};

export default FamilyTree;