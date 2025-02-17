"use client";
import React from "react";
import { LayoutGroup, motion } from "framer-motion";
import clsx from "clsx";

import { range } from "@/utils";
import Card from "@/components/Card";
import SliderControl from "@/components/SliderControl";

import Equation from "./Equation";
import styles from "./DivisionGroupsDemo.module.css";

function DivisionGroupsDemo({
  numOfItems = 12,
  initialNumOfGroups = 1,
  includeRemainderArea,
}) {
  const elemId = React.useId();
  const [numOfGroups, setNumOfGroups] = React.useState(initialNumOfGroups);

  const numOfItemsPerGroup = Math.floor(numOfItems / numOfGroups);

  const remainder = includeRemainderArea ? numOfItems % numOfGroups : null;

  // When we're splitting into 1-3 groups, display side-by-side
  // columns. When we get to 4, it should switch to a 2x2 grid.
  const gridStructure =
    numOfGroups < 4
      ? {
          gridTemplateColumns: `repeat(${numOfGroups}, 1fr)`,
        }
      : {
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
        };

  return (
    <Card as="section" className={styles.wrapper}>
      <header className={styles.header}>
        <SliderControl
          label="Number of Groups"
          className={styles.slider}
          step={1}
          min={1}
          max={4}
          value={numOfGroups}
          onChange={(ev) => setNumOfGroups(Number(ev.target.value))}
        />
      </header>

      <LayoutGroup>
        <div className={styles.demoWrapper}>
          <div className={clsx(styles.demoArea)} style={gridStructure}>
            {range(numOfGroups).map((groupIndex) => (
              <motion key={groupIndex} className={styles.group}>
                {range(
                  numOfItemsPerGroup * groupIndex,
                  numOfItemsPerGroup * (groupIndex + 1)
                ).map((index) => {
                  return (
                    <motion.div
                      key={`item-${index}-${elemId}`}
                      layoutId={`item-${index}-${elemId}`}
                      className={styles.item}
                    />
                  );
                })}
              </motion>
            ))}
          </div>
        </div>

        {includeRemainderArea && (
          <div className={styles.remainderArea} style={{flexDirection: "row-reverse"}}>
            <p className={styles.remainderHeading}>Remainder Area</p>

            {range(numOfItems - remainder, numOfItems).map((index) => {
              return (
                <motion.div
                  key={`item-${index}-${elemId}`}
                  layoutId={`item-${index}-${elemId}`}
                  className={styles.item}
                />
              );
            })}
          </div>
        )}
      </LayoutGroup>

      <Equation
        dividend={numOfItems}
        divisor={numOfGroups}
        remainder={remainder}
      />
    </Card>
  );
}

export default DivisionGroupsDemo;
