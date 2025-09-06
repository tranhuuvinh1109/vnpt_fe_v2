import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { StyledEngineProvider } from "@mui/material/styles";
import { ArrowBigLeft, ArrowBigRight, CircleCheck, RotateCcw, Send } from "lucide-react";
import * as React from "react";
import { useMemo, useState } from "react";
import { useGetAllMember } from "../../../api/member";

import toast from "react-hot-toast";
import Select from "react-select";
import { ShiftInfo, ShiftStatus } from ".";
import { LoadingPage, MyDateTimePicker } from "../..";
import { useGetAllStation, useUpdateShiftForDay } from "../../../api";
import { DataShiftForDayRequestType } from "../../../api/shift/shift.type";
import { ShiftDetailType } from "../../../type";
import { convertAndValidateUpdateRequest } from "../../../utils";
const steps = ["Phân công", "Nhận ca", "Hiện tại", "Tồn đọng"];

type CreateShiftStepProps = {
  data: ShiftDetailType;
  refetch?: () => {};
};

export function CreateShiftStep({ data, refetch }: CreateShiftStepProps) {
  const [activeStep, setActiveStep] = useState(0);

  const intiData: DataShiftForDayRequestType = {
    _id: data._id ?? "",
    station: data.station._id ?? "",
    assign: [],
    infor_pre: data.infor_pre,
    infor_during: data.infor_during,
    infor_exist: data.infor_exist,
    start_time: data.start_time,
    end_time: data.end_time,
  };

  const [infoData, setInfoData] = useState<DataShiftForDayRequestType>(intiData);

  const { data: allMember } = useGetAllMember();
  const { data: allStation } = useGetAllStation();

  const { mutate: updateShift, isPending: isPendingUpdateShift } = useUpdateShiftForDay();

  const memberOptions = allMember ? allMember?.map((item) => ({ value: item._id, label: item.email })) : [];
  const stationOptions = allStation ? allStation?.map((item) => ({ value: item._id, label: item.address })) : [];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setInfoData(intiData);
  };

  const handleSubmit = async () => {
    const payload = await convertAndValidateUpdateRequest(infoData);

    if (!payload) return;

    updateShift(payload, {
      onSuccess: () => {
        toast.success("Cập nhật dữ liệu ca thành công");
        refetch && refetch();
      },
      onError: (e) => {
        toast.error("Cập nhật dữ liệu ca thất bại");
        console.log(e);
      },
    });
  };

  const renderStepContent = useMemo(() => {
    return (
      <>
        <div className={`mb-4 flex-col gap-2 ${activeStep === 0 ? "flex" : "hidden"}`}>
          <div className="flex items-center gap-2 ">
            <div className="flex w-2/6 gap-1 font-medium md:w-2/12">
              <label className="text-xs ">Trạm:</label>
              <span className="text-red-600">*</span>
            </div>
            <div className="flex flex-1 items-center justify-between">
              <Select
                options={stationOptions}
                onChange={(e) => {
                  setInfoData((pre) => (e?.value ? { ...pre, station: e.value } : pre));
                }}
                className="w-full"
                placeholder={"Chọn trạm..."}
                styles={{
                  menu: (baseStyles) => ({
                    ...baseStyles,
                    zIndex: 100000000,
                  }),
                }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <div className="flex w-2/6 gap-1 font-medium md:w-2/12">
              <label className="text-xs ">Người được giao</label>
              <span className="text-red-600">*</span>
            </div>
            <div className="flex flex-1 items-center justify-between">
              <Select
                options={memberOptions}
                className="w-full"
                isMulti
                onChange={(e) => {
                  setInfoData((pre) => ({
                    ...pre,
                    assign: e.map((item) => item.value ?? ""),
                  }));
                }}
                placeholder={"Chọn người..."}
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
              <MyDateTimePicker
                label="Thời gian bắt đầu"
                onChange={(value) => {
                  if (value) {
                    setInfoData((pre) => ({ ...pre, start_time: value.format() }));
                  }
                }}
              />
            </div>
            <div className="flex-1">
              <MyDateTimePicker
                label="Thời gian kết thúc"
                onChange={(value) => {
                  if (value) {
                    setInfoData((pre) => ({ ...pre, end_time: value.format() }));
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className={`${activeStep === 1 ? "block" : "hidden"}`}>
          <ShiftInfo
            data={infoData.infor_pre}
            key={`infor_pre_${activeStep}`}
            title="Thông tin nhận ca"
            isEditMode
            name="infor_pre"
            setInfoData={setInfoData}
          />
        </div>
        <div className={`${activeStep === 2 ? "block" : "hidden"}`}>
          <ShiftInfo
            data={infoData.infor_during}
            key={`infor_during_${activeStep}`}
            title="Thông tin hiện tại"
            isEditMode
            name="infor_during"
            setInfoData={setInfoData}
          />
        </div>
        <div className={`${activeStep === 3 ? "block" : "hidden"}`}>
          <ShiftInfo
            data={infoData.infor_exist}
            key={`infor_exist_${activeStep}`}
            title="Thông tin tồn đọng"
            isEditMode
            name="infor_exist"
            setInfoData={setInfoData}
          />
        </div>
      </>
    );
  }, [activeStep, infoData, memberOptions, stationOptions]);
  return (
    <>
      <LoadingPage isPending={isPendingUpdateShift} />
      <StyledEngineProvider injectFirst>
        <div className="w-full">
          <div className="flex justify-start py-2">
            <ShiftStatus status={data.status} isShowDetail />
          </div>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};

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
                  onClick={handleSubmit}
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
    </>
  );
}
