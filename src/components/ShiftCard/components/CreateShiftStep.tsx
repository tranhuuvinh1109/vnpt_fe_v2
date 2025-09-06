import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { StyledEngineProvider } from "@mui/material/styles";
import { ArrowBigLeft, ArrowBigRight, CircleCheck, RotateCcw, Send } from "lucide-react";
import * as React from "react";
import { useMemo, useState } from "react";
import { useGetAllMember } from "../../../api/member";

import Select from "react-select";
import { ShiftInfo, ShiftStatus } from ".";
import { MyDateTimePicker } from "../..";
import { ShiftDetailType } from "../../../type";
const steps = ["Phân công", "Nhận ca", "Hiện tại", "Tồn đọng"];

type CreateShiftStepProps = {
  data: ShiftDetailType;
};

export function CreateShiftStep({ data }: CreateShiftStepProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const [infoData, setInfoData] = useState({
    infor_pre: data.infor_pre,
    infor_during: data.infor_during,
    infor_exist: data.infor_exist,
  });
  const { data: allMember } = useGetAllMember();

  const options = allMember ? allMember?.map((item) => ({ value: item._id, label: item.email })) : [];

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setInfoData({
      infor_pre: data.infor_pre,
      infor_during: data.infor_during,
      infor_exist: data.infor_exist,
    });
  };

  const renderStepContent = useMemo(() => {
    if (activeStep === 0) {
      return (
        <div className="mb-4 flex flex-col gap-2">
          <div className="flex items-center gap-2 ">
            <div className="block">
              <label className="text-xs">Người được giao:</label>
            </div>
            <div className="flex flex-1 items-center justify-between">
              <Select
                options={options}
                className="w-full"
                isMulti
                styles={{
                  menu: (baseStyles) => ({
                    ...baseStyles,
                    zIndex: 100000000,
                  }),
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="flex-1">
              <MyDateTimePicker label="Thời gian bắt đầu" className="" />
            </div>
            <div className="flex-1">
              <MyDateTimePicker label="Thời gian kết thúc" />
            </div>
          </div>
        </div>
      );
    }
    if (activeStep === 1) {
      return (
        <div>
          <ShiftInfo data={infoData.infor_pre} title="Thông tin nhận ca" isEditMode />
        </div>
      );
    }
    if (activeStep === 2) {
      return (
        <div>
          <ShiftInfo data={infoData.infor_during} title="Thông tin hiện tại" isEditMode />
        </div>
      );
    }
    return (
      <div>
        <ShiftInfo data={infoData.infor_exist} title="Thông tin tồn đọng" isEditMode />
      </div>
    );
  }, [activeStep, infoData, options]);
  return (
    <StyledEngineProvider injectFirst>
      <div className="w-full">
        <div className="flex justify-start py-2">
          <ShiftStatus status={data.status} isShowDetail />
        </div>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps} className="font-montserrat">
                  <span className="font-montserrat font-medium">{label}</span>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <div className="flex flex-col gap-4 px-2 py-6 md:py-2">
            <p className="text-center text-lg font-medium">Bạn có muốn lưu thông tin ca không? </p>
            <div className="flex items-center justify-end gap-2 md:gap-4">
              <button
                onClick={handleReset}
                className="flex min-w-40 items-center justify-center gap-1 rounded-lg bg-slate-400 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-500 md:text-base"
              >
                <RotateCcw size={20} /> Nhập lại
              </button>
              <button
                onClick={handleReset}
                className="flex min-w-40 items-center justify-center gap-1 rounded-lg bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-500 md:text-base"
              >
                <Send size={20} /> Lưu dữ liệu
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-2 py-2 md:mt-6">{renderStepContent}</div>
            <div className="mt-4 flex items-center justify-between">
              <button
                disabled={activeStep === 0}
                onClick={handleBack}
                className="flex min-w-40 items-center justify-center gap-1 rounded-lg bg-slate-400 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-500 md:text-base"
              >
                <ArrowBigLeft size={20} /> Quay lại
              </button>
              <button
                onClick={handleNext}
                className={`flex min-w-40 items-center justify-center gap-1 rounded-lg  px-3 py-1.5 text-sm font-medium text-white  md:text-base ${activeStep === steps.length - 1 ? "bg-green-600 hover:bg-green-500" : "bg-slate-400 hover:bg-slate-500 "}`}
              >
                {activeStep === steps.length - 1 ? <CircleCheck size={20} /> : "Kế tiếp"}
                {activeStep === steps.length - 1 ? "Hoàn thành" : <ArrowBigRight size={20} />}
              </button>
            </div>
          </>
        )}
      </div>
    </StyledEngineProvider>
  );
}
