import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { FC } from "react";

const dummyData = [
  { day: "Nov 01", users: 43 },
  { day: "Nov 02", users: 34 },
  { day: "Nov 03", users: 12 },
  { day: "Nov 04", users: 55 },
  { day: "Nov 05", users: 9 },
  { day: "Nov 06", users: 28 },
  { day: "Nov 07", users: 44 },
  { day: "Nov 08", users: 22 },
  { day: "Nov 09", users: 44 },
  { day: "Nov 10", users: 19 },
  { day: "Nov 11", users: 56 },
  { day: "Nov 12", users: 12 },
  { day: "Nov 13", users: 24 },
  { day: "Nov 14", users: 17 },
  { day: "Nov 15", users: 24 },
  { day: "Nov 16", users: 21 },
  { day: "Nov 17", users: 39 },
  { day: "Nov 18", users: 11 },
  { day: "Nov 19", users: 33 },
  { day: "Nov 20", users: 8 },
  { day: "Nov 21", users: 49 },
  { day: "Nov 22", users: 21 },
  { day: "Nov 23", users: 5 },
  { day: "Nov 24", users: 45 },
  { day: "Nov 25", users: 14 },
  { day: "Nov 26", users: 31 },
  { day: "Nov 27", users: 62 },
];

const UsersAddedGraph: FC = () => {
  return (
    <div style={{ width: "100%", height: "350px", paddingBottom: "30px" }}>
      <br />

      <ResponsiveContainer
        width="98%"
        height="100%"
        style={{ paddingLeft: "2rem" }}>
        <LineChart
          width={500}
          height={300}
          data={dummyData}
          style={{
            background: "linear-gradient(352deg, #706af6 40%, #ee9be5)",
            borderRadius: "5px",
            paddingTop: "10px",
            paddingRight: "20px",
          }}>
          <XAxis
            dataKey="day"
            label="Day"
            stroke="#6464645e"
            tick={{ fill: "#ffffff" }}
          />
          <YAxis stroke="#6464645e" tick={{ fill: "#ffffff" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#333",
              borderColor: "#555",
              fontSize: "1.4rem",
            }}
            itemStyle={{ color: "#ebcde8" }}
            labelStyle={{ color: "#ffffff" }}
          />
          <Line
            dataKey="users"
            type="monotone"
            stroke="#ebcde8"
            fill="white"
            strokeWidth={3}
            animationDuration={6000}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsersAddedGraph;
