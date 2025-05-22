import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, Quantity, supplier, taste, details, photo, price } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries());
    console.log(updateCoffee);

    //Send updated coffee to the database
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="p-24">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl">Update Coffee</h1>
      </div>
      <form onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="Coffee Name"
              defaultValue={name}
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Quantity</label>
            <input
              name="Quantity"
              type="text"
              className="input w-full"
              placeholder="Quantity Name"
              defaultValue={Quantity}
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Supplier</label>
            <input
              name="supplier"
              type="text"
              className="input w-full"
              placeholder="Supplier Name"
              defaultValue={supplier}
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Taste</label>
            <input
              name="taste"
              type="text"
              className="input w-full"
              placeholder="Taste Name"
              defaultValue={taste}
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Price</label>
            <input
              name="price"
              type="text"
              className="input w-full"
              placeholder="price per cup"
              defaultValue={price}
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Details</label>
            <input
              name="details"
              type="text"
              className="input w-full"
              placeholder="Details Name"
              defaultValue={details}
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6">
          <label className="label">Photo</label>
          <input
            name="photo"
            type="text"
            className="input w-full"
            placeholder="Photo URL"
            defaultValue={photo}
          />
        </fieldset>

        <input type="submit" className="btn w-full" value="Update Coffee" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
