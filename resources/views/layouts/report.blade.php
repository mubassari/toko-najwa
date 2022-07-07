@php
$time = \Carbon\Carbon::now();
@endphp
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="X-XSRF-TOKEN" content="{{ csrf_token() }}">
    <title>@yield('title')</title>
    <style>
        p {
            margin: 0;
            line-height: normal;
        }

        hr {
            margin: 2px;
            border: thin solid black !important;
            opacity: 1;
        }

        table {
            width: 100%;
        }

        table.info>tbody>tr>th {
            text-align: left;
        }

        table.info>tbody>tr>th:first {
            width: 100%;
        }

        table#printdata {
            text-align: center;
            page-break-after: auto;
        }

        table#printdata>tbody>tr {
            page-break-inside: avoid;
            -webkit-region-break-inside: avoid;
        }

        table#printdata>tbody>tr>td {
            text-align: center;
            page-break-inside: avoid;
            page-break-after: auto;
            font-size: 12pt;
        }

        table>thead {
            display: table-header-group;
        }

        table>tfoot {
            display: table-footer-group;
        }

        img {
            object-fit: contain;
            max-height: 50px;
        }

        * {
            box-sizing: border-box;
        }

        .row::after {
            display: table;
            clear: both;
            content: "";
        }

        .col {
            float: left
        }

        .col-1 {
            width: 8.33%;
        }

        .col-2 {
            width: 16.66%;
        }

        .col-3 {
            width: 25%;
        }

        .col-6 {
            width: 50%;
        }

        .halaman:after {
            content: counter(page);
        }
    </style>
</head>

<body>
    <header>
        <section style="padding-bottom: 1rem;">
            <div class="row"
                style="
                    margin-bottom: 1rem;
                    align-items: center;
                ">
                <div class="col col-2"></div>
                <div class="col col-1" style="justify-content: center">
                    <img src="{{ public_path() . '/images/logo.png' }}" />
                </div>
                <div class="col col-6" style="text-align: center">
                    <p style="font-size: 150%; font-weight: bold">TOKO NAJWA</p>
                    <p style="font-size: 85%; font-weight: normal">
                        Jalan A. Yani No. 03, Pasar Rudina Handil 2, Kecamatan
                        Muara Jawa,
                    </p>
                    <p style="font-size: 85%; font-weight: normal">
                        Kabupaten Kutai Kartanegara, 75261 Telp. 0812345677891
                    </p>
                </div>
                <div class="col col-3"></div>
            </div>
            <hr />
            <hr style="border: medium solid black !important" />
        </section>
        <section style="margin-bottom: 1rem">
            <div class="row">
                <div class="col col-3">
                    <table class="info">
                        <tr>
                            <th>Cetak</th>
                            <th>:</th>
                            <td>
                                {{ \Auth::user()->nama }}
                                ({{ ucwords(\Auth::user()->role) }})
                            </td>
                        </tr>
                        @yield('filter')
                    </table>
                </div>
                <div class="col col-6"></div>
                <div class="col col-3">
                    <table class="info">
                        <tr>
                            <th>Tanggal</th>
                            <th>:</th>
                            <td>
                                {{ $time->isoFormat('D MMMM Y') }}
                            </td>
                        </tr>
                        <tr>
                            <th>Halaman</th>
                            <th>:</th>
                            <td class="halaman"></td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
        <h2 style="text-transform: uppercase; text-align: center">
            @yield('title')
        </h2>
    </header>
    <main>
        <table border="1" cellspacing="0" cellpadding="3" id="printdata" width="100%">
            @yield('table')
        </table>
    </main>
    <footer style="margin-top: 1rem; page-break-inside: avoid">
        <table>
            <tr>
                <td class="col-3"></td>
                <td class="col-6"></td>
                <td class="col-3">
                    <span style="margin-right: 8rem">Muara Jawa,</span>
                    {{ $time->isoFormat('Y') }}
                </td>
            </tr>
            <tr>
                <td class="col-3"></td>
                <td class="col-6"></td>
                <td class="col-3">Pemilik Toko</td>
            </tr>
            <tr>
                <td class="col-3"></td>
                <td class="col-6"></td>
                <td class="col-3" style="height:5rem"></td>
            </tr>
            <tr>
                <td class="col-3"></td>
                <td class="col-6"></td>
                <td class="col-3">Mubahri</td>
            </tr>
        </table>
    </footer>
</body>

</html>
