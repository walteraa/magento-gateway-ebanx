<?php

require_once Mage::getBaseDir('lib') . '/Ebanx/vendor/autoload.php';

final class Ebanx_Gateway_Log_Logger_NotificationReceived extends Ebanx_Gateway_Log_Logger
{
	public static function persist(array $log_data = []) {
		parent::save(
			'notification_received',
			array_merge(
				Ebanx_Gateway_Log_Environment::get_platform_info(),
				$log_data
			)
		);
	}
}