"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { name: "Yecheng", percentage: 20, fill: "#FF6384" }, // Soft red
  { name: "Ryota", percentage: 20, fill: "#36A2EB" }, // Soft blue
  { name: "Teddy", percentage: 20, fill: "#FFCE56" }, // Soft yellow
  { name: "Ekansh", percentage: 20, fill: "#4BC0C0" }, // Soft teal
  { name: "Pal", percentage: 20, fill: "#9966FF" }, // Soft purple
];

const chartConfig = {
  percentage: {
    label: "contribution",
  },
  chrome: {
    label: "Yecheng",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Ryota",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Teddy",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Ekansh",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Pal",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Yecheng Wang",
      role: "ywa415@sfu.ca",
      github: "https://github.com/Vancarii",
      contributions: [
        "Created the login form, integrating MD5 Hash to manage, store, and validate admin login",
        "Added the sorting and delete prompt functionality for the reports list",
        "Worked on the leaflet map to return current visible markers, and made the reports list display only currently visible reports",
        "Developed the details card that hovers on top of the map, and made it read from the map and the reports list to only display the clicked report",
        "Managed Github Version Control and Pull Requests",
        "Created and designed the about page",
      ],
    },
    {
      name: "Ryota Kato",
      role: "rka147@sfu.ca",
      github: "https://github.com/ryotakc",
      contributions: [
        "Setup the GitHub Repository and Project environment / architecture",
        "Designed the homepage UI with leaflet map placement and Emergency table",
        "Implementation of Emergency Table, Header nav bar, page routing, and Light/Darkmode",
        "In the Emergency Table, made it possible to change the contents of the localstorage and table when the Type section is changed or the Status is changed",
        "Managed Github Version Control and Pull Requests",
      ],
    },
    {
      name: "Atulya Malhan",
      role: "ama367@sfu.ca",
      github: "https://github.com/teddymalhan",
      contributions: [
        "Added a form system",
        "integrated localStorage API and made the map points dynamic",
        "setup default values for the form",
        "added google-libphone based Canadian Phone number check",
        "worked to define Data Models and DTOs",
        "did basic testing",
        "Managed Github Version Control and Pull Requests",
      ],
    },
    {
      name: "Pal Rohit Tilva",
      role: "prt2@sfu.ca",
      github: "https://github.com/prt2",
      contributions: [
        "Implemented an interactive map using leaflet to allow users to drop pins and retrieve precise geographic coordinates for use in form data submission",
        "Handled click events and dynamically displaying coordinates and managed data flow",
        "Managed Github Version Control and Pull Requests",
        "Made sure team was on track with tasks and checked off functional requirements",
      ],
    },
    {
      name: "Ekansh Chawla",
      role: "eca162@sfu.ca",
      github: "https://github.com/Ekanshthegreat",
      contributions: [
        "Developed leaflet-map that pulls data from dom local storage and allows to view event details on click",
        "Managed Github Version Control and Pull Requests",
        "Added functionality for the map to zoom into the correct marker when a report is clicked",
        "Added markers to display on the map whenever a report is added",
        "Divided the project tasks among group members equally",
      ],
    },
  ];

  return (
    <div
      className="container space-y-8 py-8"
      style={{ minHeight: "100vh", overflowY: "auto" }}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center">
        <div className="lg:w-1/3">
          <h1 className="mb-4 mt-16 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
            <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-600">
              ABOUT US
            </mark>
          </h1>
          <p className="mb-10 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Meet the team behind the project.
          </p>
        </div>

        <Card className="flex flex-col shadow-xl lg:w-1/2">
          <CardHeader className="items-center pb-0">
            <CardTitle>Group Contributions</CardTitle>
            <CardDescription>November - December 2024</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0 mt-5">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[300px] px-0"
            >
              <PieChart>
                <ChartTooltip
                  content={
                    <ChartTooltipContent nameKey="percentage" hideLabel />
                  }
                />
                <Pie
                  data={chartData}
                  dataKey="percentage"
                  labelLine={false}
                  label={({ payload, ...props }) => {
                    return (
                      <text
                        cx={props.cx}
                        cy={props.cy}
                        x={props.x}
                        y={props.y}
                        textAnchor={props.textAnchor}
                        dominantBaseline={props.dominantBaseline}
                        fill="hsla(var(--foreground))"
                      >
                        {payload.percentage}
                      </text>
                    );
                  }}
                  nameKey="name"
                />
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
            {/* <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing total percentage for the last 6 months
            </div> */}
          </CardFooter>
        </Card>
      </div>

      <div className="flex justify-center">
        <Separator className="w-1/3" />
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-xl dark:bg-gray-800"
            style={{ borderColor: chartData[index].fill, borderWidth: "2px" }}
          >
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {member.name}
              </span>
              <a
                href={member.github}
                className="text-sm text-blue-500 dark:text-blue-300 inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.202 2.393.099 2.646.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.936.36.31.682.92.682 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.137 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub Profile
              </a>
            </div>
            <h3 className="text-lg text-gray-500 dark:text-gray-300">
              {member.role}
            </h3>
            <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-400">
              {member.contributions.map((contribution, idx) => (
                <li key={idx}>{contribution}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;