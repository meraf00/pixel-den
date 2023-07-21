import { MoneyCollectOutlined, TransactionOutlined } from "@ant-design/icons";
import { useAuth } from "features/authentication";
import { PaymentForm } from "features/payment";
import React from "react";
import * as PaymentProviderIcon from "assets/paymentProviders";

const PaymentPage = () => {
  const { user } = useAuth();

  return (
    <div className="px-3 md:ml-96 mt-4">
      {/* Setting title */}
      <div className="flex gap-4 items-center mb-10">
        <span className="flex items-center font-semibold">
          <MoneyCollectOutlined />
        </span>
        <span className="flex items-center font-medium text-lg md:text-xl">
          Payment settings
        </span>
      </div>

      <div className="flex flex-col mb-16 gap-8">
        <span className="flex items-center font-medium text-md md:text-lg border-b border-gray-600 py-3 mr-24">
          Current balance
        </span>

        <div className="grid grid-cols-2 mb-2">
          <div className="flex flex-col gap-2">
            <span>Verified balance</span>
            <span>Total balance</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-mono">300.35 ETB</span>
            <span className="font-mono">400.00 ETB</span>
          </div>
        </div>

        <div className="flex gap-10">
          <button className="bg-primary-200 py-3 px-8 rounded-lg flex gap-3 items-center justify-center hover:shadow-lg">
            <span className="flex items-center">
              <TransactionOutlined />
            </span>
            <span className="flex items-center">Deposite</span>
          </button>
          <button className="bg-primary-200 py-3 px-8 rounded-lg flex gap-3 items-center justify-center hover:shadow-lg">
            <span className="flex items-center">
              <TransactionOutlined />
            </span>
            <span className="flex items-center">Withdraw</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-5 mb-16">
        <span className="flex items-center font-medium text-md md:text-lg border-b border-gray-600 py-3 mr-24">
          Payment methods
        </span>

        <div className="flex gap-16 md:gap-x-20 lg:gap-x-36 flex-wrap py-4">
          <div className="flex items-center gap-4">
            <img
              src={PaymentProviderIcon.chapa}
              alt="Chapa"
              width={50}
              height={50}
              className="rounded-lg shadow-sm shadow-gray-700"
            />
            <span>Chapa</span>
          </div>

          <div className="flex items-center gap-4">
            <img
              src={PaymentProviderIcon.yenepay}
              alt="Yenepay"
              width={50}
              className="rounded-lg shadow-sm shadow-gray-700"
            />
            <span>Yenepay</span>
          </div>

          <div className="flex items-center gap-4">
            <img
              src={PaymentProviderIcon.santimpay}
              alt="SantimPay"
              width={50}
              className="rounded-lg shadow-sm shadow-gray-700 bg-white"
            />
            <span>SantimPay</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
