<?php
class Ebanx_Gateway_Block_Info_Tef extends Mage_Payment_Block_Info
{
    protected function _construct()
	{
        parent::_construct();
        $this->setTemplate('ebanx/info/tef.phtml');
    }
}
