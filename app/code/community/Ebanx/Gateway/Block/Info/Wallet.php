<?php

class Ebanx_Gateway_Block_Info_Wallet extends Ebanx_Gateway_Block_Info_Abstract
{
    /**
     * @return Ebanx_Gateway_Block_Info_Wallet
     */
    protected function _construct()
    {
        parent::_construct();
        $this->setTemplate('ebanx/info/wallet.phtml');
        if ($this->isAdmin()) {
            $this->setTemplate('ebanx/info/default.phtml');
        }
    }
}
