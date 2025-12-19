import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup' 

const RequestForm = () => {

    const schema = yup.object().shape({
        fullName: yup.string().required("Please enter your name"),
        requestType: yup.string().required("Please select the type of request."),
        purpose: yup.string().required("Plase state the purpose of your request"),
        date: yup.date().required("Input date"),
    })

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 font-mono flex flex-col gap-5 justify-center"
    >
      <div className="flex flex-col gap-2">
        <label className="text-lg">Full name</label>
        <input type="text" className="border py-2 px-3 rounded-lg" {...register("fullName")} />
        <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-lg">Request Type</label>
        <select name="" id="" className="border py-2.5 px-3 rounded-lg" {...register("requestType")} >
          <option value="clearance" className="">
            Clearance
          </option>
          <option value="indigency" className="">
            Indigency
          </option>
          <option value="permit" className="">
            Permit
          </option>
        </select>
        <p className="text-red-500 text-sm">{errors.requestType?.message}</p>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-lg">Purpose</label>
        <textarea
          name=""
          id=""
          className="border py-2.5 px-3 rounded-lg"
          rows={4}
          {...register("purpse")}
        ></textarea>
        <p className="text-red-500 text-sm">{errors.purpose?.message}</p>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-lg">Date</label>
        <input type="date" className="border py-2 px-3 rounded-lg" {...register("date")}/>
        <p className="text-red-500 text-sm">{errors.date?.message}</p>
      </div>

      <button className="py-2 px-3 bg-green-200 hover:bg-green-300 active:bg-green-500 rounded-lg transition-colors cursor-pointer" type='submit'>
        Submit
      </button>
    </form>
  );
};

export default RequestForm;
