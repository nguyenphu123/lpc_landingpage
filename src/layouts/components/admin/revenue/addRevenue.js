"use client";

import React, { useState } from "react";
import { SketchPicker } from "react-color";
import Image from "next/image";
import { Button, Box, Grid, Col } from "@mantine/core";

import { useSession } from "next-auth/react";
import ToastGenerator from "@/lib/toast-tify";
import { CreateRevenue } from "@/lib/createData";

function AddRevenue({ refreshRevenue }) {
  let { data: session, status } = useSession();
  const [successMessage, setSuccessMessage] = useState("");

  const [isSucess, setIsSucess] = useState(false);
  const [sucessMessage, setSucessMessage] = useState("");
  const [year, setYear] = useState("");
  const [revenue, setRevenue] = useState("");
  const [color, setColor] = useState("");

  const onSubmitForm = async () => {
    // Continue with the rest of the form submission
    e.preventDefault();
    let newData = {
      year: year,
      revenue: revenue,
      background: color,
    };
    const newRevenue = await CreateRevenue(newData, session);
    if (newRevenue.success != undefined) {
      showToast(newRevenue.msg);
      refreshRevenue();
    }

    setSuccessMessage(newRevenue.msg);

    setTimeout(() => {
      setSuccessMessage(null);
    }, 10000);
  };
  const showToast = (msg) => {
    setIsSucess(true);
    setSucessMessage(msg);
    setTimeout(() => {
      setIsSucess(false);
      setSucessMessage("");
    }, 10000);
  };
  const colorChange = (color, event) => {
    setColor(color.hex);
  };
  const yearChange = (year, event) => {
    setYear(year.target.value);
  };
  const revenueChange = (revenue, event) => {
    setRevenue(revenue.target.value);
  };
  return (
    // <div style={{ maxHeight: "500px", overflowY: "auto" }}>

    <div className="container">
      {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}
      <Box maw={"75%"} mx="auto">
        <form onSubmit={(e) => onSubmitForm(e)}>
          <h3 className="flex justify-center">Add revenue</h3>

          <Grid gutter="lg">
            <Col span={6} className="list-item ">
              <input
                type="text"
                id="year"
                name="year"
                placeholder=" year"
                onChange={(year) => yearChange(year)}
              />

              <input
                type="text"
                id="revenue"
                name="revenue"
                placeholder="revenue"
                onChange={(revenue) => revenueChange(revenue)}
              />
            </Col>

            <Col span={6} className="flex justify-end mt-6">
              <SketchPicker
                color={color}
                onChange={(color) => colorChange(color, event)}
              />
            </Col>
            <Col span={6} className="flex justify-end mt-6">
              <div className="relative z-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="-mt-16 ml-10 rounded-full absolute w-28 h-28 inset-0 flex justify-center items-center z-10 bg-white">
                  <div
                    style={{ backgroundColor: color }}
                    className="rounded-full absolute w-24 h-24   flex items-center justify-center font-bold text-white text-xl"
                  >
                    <div>{year}</div>
                  </div>
                </div>
                <div
                  style={{ backgroundColor: color }}
                  className="w-48 h-60  content-center grid  "
                >
                  <div>
                    <Image
                      src={"/images/logo.png"}
                      width={175}
                      height={80}
                      alt={"alt"}
                      priority
                    />
                    <div className=" flex items-center justify-center font-bold text-white text-3xl">
                      {revenue}
                    </div>
                    <div className=" flex items-center justify-center font-light text-white text-lg">
                      BILLION VND
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={6} className="flex justify-end mt-6">
              {/* Thêm class CSS để đặt nút submit ở góc phải */}

              <Button
                type="submit"
                style={{ backgroundColor: "blue" }}
                size="md"
              >
                Submit
              </Button>
            </Col>
          </Grid>
        </form>

        {successMessage && (
          <div style={{ marginTop: "16px", color: "green" }}>
            {successMessage}
          </div>
        )}
      </Box>
    </div>

    // </div>
  );
}

export default AddRevenue;
