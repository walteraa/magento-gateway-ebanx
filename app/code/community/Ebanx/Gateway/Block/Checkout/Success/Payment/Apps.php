<?php

class Ebanx_Gateway_Block_Checkout_Success_Payment_Apps extends Mage_Core_Block_Template
{
    public function getEbanxPaymentHash()
    {
        $this->getPayment()->getEbanxPaymentHash();
    }

    public function getPayment()
    {
        $lastOrderId = Mage::getSingleton('checkout/session')->getLastOrderId();
        $order = Mage::getModel('sales/order')->load($lastOrderId);

        return $order->getPayment();
    }
}
