/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, Divider, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppSelector } from "@/redux/hooks";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LoadingButton } from "@mui/lab";
import { BooleanState } from "@/types/utils";
import FormProvider from "@/components/hook-form/form-provider";
import RHFTextField from "@/components/hook-form/rhf-text-field";
import { useUpdateVendorProfileMutation } from "@/redux/reducers/vendor/vendorApi";

export const profileUpdateSchema = z.object({
  shopName: z.string().optional(),
  description: z.string().optional(),
  address: z.string().optional(),
  contactPhone: z.string().optional(),
});

interface Props {
  dialog: BooleanState;
}

const UpdateVendorProfileDilaog = ({ dialog }: Props) => {
  const { user } = useAppSelector((state) => state.auth);

  console.log("user", user);

  const methods = useForm({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues: {
      shopName: user.vendor?.shopName,
      description: user?.vendor?.description,
      address: user?.vendor?.address,
      contactPhone: user?.vendor?.contactPhone,
    },
  });

  const [updateShop, { isLoading }] = useUpdateVendorProfileMutation();

  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    console.log("ddd", data);
    const payload: any = { _id: user?.vendor._id };

    if (data.shopName && data.shopName !== user.vendor?.shopName) {
      payload.shopName = data.shopName;
    }
    if (data.address && data.address !== user.vendor?.address) {
      payload.address = data.address;
    }
    if (data.contactPhone && data.contactPhone !== user.vendor?.contactPhone) {
      payload.contactPhone = data.contactPhone;
    }

    // If no changes detected, notify the user
    if (Object.keys(payload).length === 1) {
      toast.error("No changes detected");
      return;
    }
    try {
      const res = await updateShop(payload).unwrap();
      if (res.success) {
        toast.success(res.message);
        dialog.setFalse();
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      toast.error(error.data.message);
      console.error("Failed to create post", error);
    }
  });

  return (
    <Dialog
      open={dialog.value}
      onClose={dialog.setFalse}
      fullWidth
      maxWidth="xs"
    >
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <div className="w-full relative p-5">
          <IconButton
            sx={{
              position: "absolute",
              top: 7,
              right: 7,
              bgcolor: "#E5E7EB",
            }}
            onClick={dialog.setFalse}
          >
            <CloseIcon />
          </IconButton>

          <div className="text-center p-4">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              Update Profile
            </h3>
          </div>

          <div className="flex flex-col gap-3">
            <RHFTextField name="shopName" label="Shop name" />
            <RHFTextField name="address" label="Address" />
            <RHFTextField name="contactPhone" label="Phone" />
          </div>
          <LoadingButton
            type="submit"
            color="primary"
            variant="contained"
            loading={isLoading}
            disabled={isLoading}
            fullWidth
            size="large"
            sx={{
              my: 2,
              textTransform: "capitalize",
            }}
          >
            Update Profile
          </LoadingButton>
        </div>
      </FormProvider>
    </Dialog>
  );
};

export default UpdateVendorProfileDilaog;
