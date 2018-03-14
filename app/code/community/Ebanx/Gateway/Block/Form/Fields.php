<?php

class Ebanx_Gateway_Block_Form_Fields extends Mage_Core_Block_Template
{
    public $methodCode;

    public function getHtmlForMethodCode($code)
    {
        $this->methodCode = $code;
        return parent::toHtml();
    }
}
