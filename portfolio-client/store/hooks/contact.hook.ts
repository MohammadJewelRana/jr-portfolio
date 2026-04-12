import toast from "react-hot-toast";
import {
  useCreateContactMutation,
  useGetAllContactsQuery,
  useMarkAsReadMutation,
} from "../services/contact.api";

// 🔹 Create Contact (Send Message)
export const useCreateContact = () => {
  const [createContact, { isLoading, error }] =
    useCreateContactMutation();

  const create = async (data: any) => {
    try {
      await createContact(data).unwrap();
      toast.success("Message sent successfully ✅");
    } catch (err: any) {
      toast.error("Failed to send message ❌");
      console.error(err);
    }
  };

  return { create, isLoading, error };
};

// 🔹 Get All Contacts (Admin)
export const useGetAllContacts = () => {
  const { data, error, isLoading } = useGetAllContactsQuery(undefined);

  let contacts: any[] = [];

  if (data?.success) {
    contacts = data.data;
  }

  return {
    contacts,
    isLoading,
    isError: !!error,
  };
};

// 🔹 Mark Contact as Read
export const useMarkAsRead = () => {
  const [markAsRead, { isLoading, error }] =
    useMarkAsReadMutation();

  const mark = async (id: string) => {
    try {
      await markAsRead(id).unwrap();
      toast.success("Marked as read ✅");
    } catch (err) {
      toast.error("Failed to update ❌");
    }
  };

  return { mark, isLoading, error };
};