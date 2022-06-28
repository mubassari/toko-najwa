<?php
namespace App\Helper;
use Str;

class Helper
{
    public static function formatCurrency($number) {
        $currency = new \NumberFormatter('id_ID', \NumberFormatter::CURRENCY);
        return $currency->format($number);
    }

    public static function getRowspan($data, $key, $value, $index, $prev_key = '', $style = '') {
        // $rowspan = 0;

        // for ($i = $index - 1; $i < $data->count(); $i++) {
        //     if ($data->toArray()[$i][$key] == $value) {
        //         $rowspan++;
        //     } else {
        //         break;
        //     }
        // }

        // return $rowspan;

        $table = '';
        if (($data->toArray()[$index - 2][$key] ?? '') !== $value) {
            if (($data->toArray()[$index][$key] ?? '') !== $value) {
                $table .= '<td style="'.$style.'">'.$value.'</td>';
            } else {
                $table .= '<td style="border-bottom: 0; '.$style.'">'.$value.'</td>';
            }
        } else {
            if (($data->toArray()[$index][$key] ?? '') !== $value) {
                if ($prev_key !== '') {
                    if (($data->toArray()[$index][$prev_key] ?? '') != $data->toArray()[$index-1][$prev_key]) {
                        if (($data->toArray()[$index - 2][$prev_key] ?? '') != $data->toArray()[$index-1][$prev_key]) {
                            $table .= '<td style="'.$style.'">'.$value.'</td>';
                        } else {
                            $table .= '<td style="border-top:0;'.$style.'"></td>';
                        }
                    } else{
                        $table .= '<td style="'.$style.'">'.$value.'</td>';
                    }
                } else {
                    $table .= '<td style="border-top:0; '.$style.'"></td>';
                }
            } else {
                if ($prev_key !== '' && ($data->toArray()[$index][$prev_key] ?? '') != $data->toArray()[$index-1][$prev_key]) {
                    $table .= '<td style="border-top:0;'.$style.'"></td>';
                } elseif($prev_key !== '' && ($data->toArray()[$index-2][$prev_key] ?? '') != $data->toArray()[$index-1][$prev_key]) {
                    $table .= '<td style="border-bottom:0; '.$style.'">'.$value.'</td>';
                } else {
                    $table .= '<td style="border-top:0;border-bottom:0; '.$style.'"></td>';
                }
            }
        }


        // if ($prev_key !== '' && ($data->toArray()[$index][$prev_key] ?? '') !== $data->toArray()[$index-1][$prev_key]) {
        //     $table .= '<td style="border-top:0; border-bottom:0; '.$style.'"></td>';
        // } else {

        return $table;
    }
}
?>
