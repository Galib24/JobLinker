import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    
  } from 'recharts';

const InsinghtsChart = () => {
    // Visitor Insinghts data start
    const insinghtsData = [
        {
          name: "jan",
          newVisitor: 400,
          perVisitor: 240,
          amt: 240
        },
        {
          name: "feb",
          newVisitor: 300,
          perVisitor: 139,
          amt: 221
        },
        {
          name: "mar",
          newVisitor: 200,
          perVisitor: 980,
          amt: 229
        },
        {
          name: "apr",
          newVisitor: 278,
          perVisitor: 390,
          amt: 200
        },
        {
            name: "may",
            newVisitor: 400,
            perVisitor: 240,
            amt: 240
          },
          {
            name: "jun",
            newVisitor: 300,
            perVisitor: 139,
            amt: 221
          },
          {
            name: "jul",
            newVisitor: 200,
            perVisitor: 980,
            amt: 229
          },
          {
            name: "aug",
            newVisitor: 278,
            perVisitor: 390,
            amt: 200
          },
          {
            name: "sep",
            newVisitor: 400,
            perVisitor: 240,
            amt: 240
          },
          {
            name: "oct",
            newVisitor: 300,
            perVisitor: 139,
            amt: 221
          },
          {
            name: "nov",
            newVisitor: 200,
            perVisitor: 980,
            amt: 229
          },
          {
            name: "dec",
            newVisitor: 278,
            perVisitor: 390,
            amt: 200
          }

      ];
    // Visitor Insinghts data end
    return (
        <div>
            <LineChart
                width={500}
                height={200}
                data={insinghtsData}

                >
                <Line dataKey="newVisitor" type="monotone" stroke="#8884d8"></Line>
                <Line dataKey="perVisitor"></Line>
                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                <YAxis />
                <Tooltip />
                <Legend />
             </LineChart>
        </div>
    );
};

export default InsinghtsChart;