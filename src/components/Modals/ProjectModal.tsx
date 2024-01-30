import { UseFormHandleSubmit, UseFormClearErrors, UseFormRegister, UseFormReset, FieldValues, FieldErrors } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import Modal from "../Modal";

type Props = {
    openAddModal: boolean;
    setOpenAddModal: Dispatch<SetStateAction<boolean>>;
    clearErrors: UseFormClearErrors<FieldValues>;
    reset: UseFormReset<FieldValues>;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    modalTitle: string;
    submitHandler: (data: FieldValues) => Promise<void>;
    onCloseFn?: () => any;
    submitButtonText?: string;
    setInputFileValue: Dispatch<SetStateAction<FileList | null>>;
}

export default function ProjectModal({
    openAddModal,
    setOpenAddModal,
    clearErrors,
    reset,
    handleSubmit,
    submitHandler,
    errors,
    register,
    modalTitle,
    onCloseFn,
    submitButtonText,
    setInputFileValue,
}: Props) {
  
  return (
    <Modal
        open={openAddModal}
        setOpen={setOpenAddModal}
        title={modalTitle}
        options={{
          titleWrapperClassName: "!px-6",
          titleCustomClassName: "xxs:!text-[20px]",
          modalWrapperClassName: "px-0 w-[30rem] xxs:!w-[20rem]",
          onClose: onCloseFn ? onCloseFn() : () => {
            setOpenAddModal(false);
            clearErrors();
            reset();
          }
        }}
      >
        <form noValidate onSubmit={handleSubmit(submitHandler)}>
          <div className="px-6 mt-5 flex flex-col space-y-3">
            <p className="text-red-500 ml-1 uppercase text-xs tracking-widest" hidden={!Object.keys(errors).length}>
              {errors.name?.message as string}
            </p>
            <input 
              type="text"
              placeholder="Name"
              className="border transition duration-300 dark:bg-[#232424] dark:border-gray-600 dark:text-white bg-gray-200 border-gray-600 text-gray-900 text-[17px] w-full placeholder-gray-400 rounded-[30px] h-[45px] px-5 focus:outline-none"
              {...register("name", {
                required: "Name is required",
              })}
            />
            <p className="text-red-500 ml-1 uppercase text-xs tracking-widest" hidden={!Object.keys(errors).length}>
              {errors.description?.message as string}
            </p>
            <input 
              type="text"
              placeholder="Description"
              className="border transition duration-300 dark:bg-[#232424] dark:border-gray-600 dark:text-white bg-gray-200 border-gray-600 text-gray-900 text-[17px] w-full placeholder-gray-400 rounded-[30px] h-[45px] px-5 focus:outline-none"
              {...register("description", {
                required: "Description is required",
              })}
            />
              <p className="text-red-500 ml-1 uppercase text-xs tracking-widest" hidden={!Object.keys(errors).length}>
              {errors.githubLink?.message as string}
            </p>
            <input 
              type="url"
              placeholder="Github link"
              className="border transition duration-300 dark:bg-[#232424] dark:border-gray-600 dark:text-white bg-gray-200 border-gray-600 text-gray-900 text-[17px] w-full placeholder-gray-400 rounded-[30px] h-[45px] px-5 focus:outline-none"
              {...register("githubLink", {
                required: "Github link is required",
              })}
            />
            <input 
              type="url"
              placeholder="Project link"
              className="border transition duration-300 dark:bg-[#232424] dark:border-gray-600 dark:text-white bg-gray-200 border-gray-600 text-gray-900 text-[17px] w-full placeholder-gray-400 rounded-[30px] h-[45px] px-5 focus:outline-none"
              {...register("projectLink")}
            />
            <p className="text-red-500 ml-1 uppercase text-xs tracking-widest" hidden={!Object.keys(errors).length}>
              {errors.stack?.message as string}
            </p>
            <textarea 
              cols={10}
              placeholder="Stack"
              className="pt-1 h-28 border transition duration-300 dark:bg-[#232424] dark:border-gray-600 dark:text-white bg-gray-200 border-gray-600 text-gray-900 text-[17px] placeholder-gray-400 rounded-[30px] px-5 focus:outline-none"
              {...register("stack", {
                required: "Stack is required",
              })}
            />
            <p className="text-red-500 ml-1 uppercase text-xs tracking-widest" hidden={!Object.keys(errors).length}>
              {errors.stackIcons?.message as string}
            </p>
            <textarea 
              cols={10}
              placeholder="Stack Icons Url"
              className="pt-1 h-28 border transition duration-300 dark:bg-[#232424] dark:border-gray-600 dark:text-white bg-gray-200 border-gray-600 text-gray-900 text-[17px] w-full placeholder-gray-400 rounded-[30px] px-5 focus:outline-none"
              {...register("stackIcons", {
                required: "Stack Icons Url is required",
              })}
            />
            {modalTitle === 'Edit project' && (
              <p className="text-gray-400 ml-1 uppercase text-xs tracking-widest !mt-4">
                If left empty, it won't change the current image
              </p>
            )}
            <input  
              type="file"
              accept="image/*"
              multiple={true}
              className="bg-[#dbdbdb] dark:bg-[#181818] dark:hover:!bg-[#222222] hover:!bg-[#cecece] text-gray-900 border border-stone-400 dark:border-[#404040] dark:text-gray-300 w-full file-input file-input-md file:text-gray-200 file:bg-gray-900 hover:file:bg-black file:font-normal file:text-xs uppercase tracking-widest text-xs rounded-full pr-12"
              onChange={(e) => setInputFileValue(e.target.files as FileList)} 
            />
          </div>
          <hr className="my-5 bg-gray-600 h-[0.06rem] border-0" />
          <div className="mx-6">
            <button className="w-full bg-green-700 text-white rounded-full py-2 uppercase tracking-widest text-sm hover:bg-green-800 transition-colors duration-300 ease-in-out">
                {submitButtonText ? submitButtonText : "save"}
            </button>
          </div>
        </form>
      </Modal>
  )
}