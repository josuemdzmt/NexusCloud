<template>
	<main>
		
		<div class="p-3 lg:py-6 lg:px-0">
			<div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
				<h1 class="text-gray-900 text-xl font-bold mb-0">Data Tables</h1>
			</div>

			<!-- Start grid -->
			<div class="grid grid-cols-1">
				<div class="preview-card bg-white/50 rounded-md border border-border-color p-5 pb-0">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h2 class="text-gray-900 text-lg font-bold mb-0">Data Table</h2>
						<button type="button" @click="toggleCode(0)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(0) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div> <!-- end col -->

					<div class="pb-3 flex items-center justify-between gap-3 flex-wrap">
						<h3 class="text-[17.5px]">Data List</h3>
						<div class="flex items-center"> 
							<div id="tablesearch">
								<div class="table-search d-flex align-items-center">
									<div class="search-input">
										<a href="javascript:void(0);" class="btn-searchset"
											><i class="isax isax-search-normal fs-12"></i
										></a>
										<input
											type="text"
											class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color"
											placeholder="Search"
											v-model="searchQuery"
										/>
									</div>
								</div>
							</div> 
						</div> 
					</div> <!-- end col -->

					<div class="preview-content overflow-auto" :class="{ hidden: showCode(0) }">
						<a-table
							class="table table-nowrap datatable"
							:columns="columns"
							:data-source="paginatedData"
							:pagination="false"
						>
							<template #bodyCell="{ column, record }">
								<template v-if="column.key === 'name'">
									<div>{{ record.Name }}</div>
								</template>
							</template>
						</a-table>
						<div class="grid grid-cols-12 px-4 gap-2 py-3">
							<div class="sm:col-span-4 col-span-12"> 
								<div id="tablelength" class="flex justify-center sm:block"></div>
							</div>
							<div class="sm:col-span-4 col-span-12 flex items-center justify-center"> 
								<div id="tablepage" class="flex justify-center sm:block"></div> 
							</div>
							<div class="sm:col-span-4 col-span-12 flex items-center sm:justify-end justify-center"> 
								<div id="tableinfo" class="flex justify-center sm:block"></div>
							</div> 
						</div>
					</div> <!-- end col -->

<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(0) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[400px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;a-table class="table table-nowrap datatable" :columns="columns" :data-source="paginatedData" :pagination="false""&gt;
	&lt;template #bodyCell="{ column, record }"&gt;
		&lt;template v-if="column.key === 'name'"&gt;
			&lt;div&gt;
				record.Name
			&lt;div&gt;
		&lt;/template&gt;
	&lt;/template&gt;
&lt;/a-table&gt;


</code>
</pre>
				</div>   
			</div> 
			<!-- End grid -->  
		</div>
	</main>
</template>
<script>
import BasePagination from '@/components/BasePagination.vue';

const columns = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "name",
    sorter: {
      compare: (a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Position",
    dataIndex: "Position",
    key: "position",
    sorter: {
      compare: (a, b) => (a.position.toLowerCase() > b.position.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Office",
    dataIndex: "Office",
    key: "office",
    sorter: {
      compare: (a, b) => (a.office.toLowerCase() > b.office.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Age",
    dataIndex: "Age",
    key: "age",
    sorter: {
      compare: (a, b) => (a.age.toLowerCase() > b.age.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Start date",
    dataIndex: "Start_date",
    key: "start_date",
    sorter: {
      compare: (a, b) =>
        a.start_date.toLowerCase() > b.start_date.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Salary",
    dataIndex: "Salary",
    key: "salary",
    sorter: {
      compare: (a, b) => (a.salary.toLowerCase() > b.salary.toLowerCase() ? -1 : 1),
    },
  },
];
const data = [
	{
		"Name": "Tiger Nixon",
		"Position": "System Architect",
		"Office": "Edinburgh",
		"Age": 61,
		"Start_date": "2011 Apr 25",
		"Salary": "$320,800"
	},
	{
		"Name": "Garrett Winters",
		"Position": "Accountant",
		"Office": "Tokyo",
		"Age": 63,
		"Start_date": "2011 Jul 25",
		"Salary": "$170,750"
	},
	{
		"Name": "Ashton Cox",
		"Position": "Junior Technical Author",
		"Office": "San Francisco",
		"Age": 66,
		"Start_date": "2009 Jan 12",
		"Salary": "$86,000"
	},
	{
		"Name": "Cedric Kelly",
		"Position": "Senior Javascript Developer",
		"Office": "Senior Javascript Developer",
		"Age": 22,
		"Start_date": "2012 Mar 29",
		"Salary": "$433,060"
	},
	{
		"Name": "Airi Satou",
		"Position": "Accountant",
		"Office": "Tokyo",
		"Age": 33,
		"Start_date": "2008 Nov 28",
		"Salary": "$162,700"
	},
	{
		"Name": "Brielle Williamson",
		"Position": "Integration Specialist",
		"Office": "New York",
		"Age": 61,
		"Start_date": "2012 Dec 02",
		"Salary": "$372,000"
	},
	{
		"Name": "Herrod Chandler",
		"Position": "Sales Assistant",
		"Office": "San Francisco",
		"Age": 59,
		"Start_date": "2012 Aug 06",
		"Salary": "$137,500"
	},
	{
		"Name": "Rhona Davidson",
		"Position": "Integration Specialist",
		"Office": "Tokyo",
		"Age": 55,
		"Start_date": "2010 Oct 14",
		"Salary": "$327,900"
	},
	{
		"Name": "Colleen Hurst",
		"Position": "Javascript Developer",
		"Office": "San Francisco",
		"Age": 39,
		"Start_date": "2009 Sep 15",
		"Salary": "$205,500"
	},
	{
		"Name": "Sonya Frost",
		"Position": "Software Engineer",
		"Office": "Edinburgh",
		"Age": 23,
		"Start_date": "2008 Dec 13",
		"Salary": "$103,600"
	},
	{
		"Name": "Jena Gaines",
		"Position": "Office Manager",
		"Office": "London",
		"Age": 30,
		"Start_date": "2008 Dec 19",
		"Salary": "$90,560"
	},
	{
		"Name": "Quinn Flynn",
		"Position": "Support Lead",
		"Office": "Edinburgh",
		"Age": 22,
		"Start_date": "2013 Mar 03",
		"Salary": "$342,000"
	},
	{
		"Name": "Charde Marshall",
		"Position": "Regional Director",
		"Office": "San Francisco",
		"Age": 36,
		"Start_date": "2008 Oct 16",
		"Salary": "$470,600"
	},
	{
		"Name": "Haley Kennedy",
		"Position": "Senior Marketing Designer",
		"Office": "London",
		"Age": 43,
		"Start_date": "2012 Dec 18",
		"Salary": "$313,500"
	},
	{
		"Name": "Tatyana Fitzpatrick",
		"Position": "Regional Director",
		"Office": "London",
		"Age": 19,
		"Start_date": "2010 Mar 17",
		"Salary": "$385,750"
	},
	{
		"Name": "Michael Silva",
		"Position": "Marketing Designer",
		"Office": "London",
		"Age": 66,
		"Start_date": "2012 Nov 27",
		"Salary": "$198,500"
	},
	{
		"Name": "Paul Byrd",
		"Position": "Chief Financial Officer (CFO)",
		"Office": "New York",
		"Age": 64,
		"Start_date": "2010 Jun 09",
		"Salary": "$725,000"
	},
	{
		"Name": "Gloria Little",
		"Position": "Systems Administrator",
		"Office": "New York",
		"Age": 59,
		"Start_date": "2009 Apr 10",
		"Salary": "$237,500"
	},
	{
		"Name": "Bradley Greer",
		"Position": "Software Engineer",
		"Office": "London",
		"Age": 41,
		"Start_date": "2012 Oct 13",
		"Salary": "$132,000"
	},
	{
		"Name": "Dai Rios",
		"Position": "Personnel Lead",
		"Office": "Edinburgh",
		"Age": 35,
		"Start_date": "2012 Sep 26",
		"Salary": "$217,500"
	},
	{
		"Name": "Jenette Caldwell",
		"Position": "Development Lead",
		"Office": "New York",
		"Age": 30,
		"Start_date": "2011 Sep 03",
		"Salary": "$345,000"
	},
	{
		"Name": "Yuri Berry",
		"Position": "Chief Marketing Officer (CMO)",
		"Office": "New York",
		"Age": 40,
		"Start_date": "2009 Jun 25",
		"Salary": "$675,000"
	},
	{
		"Name": "Caesar Vance",
		"Position": "Pre-Sales Support",
		"Office": "New York",
		"Age": 21,
		"Start_date": "2011 Dec 12",
		"Salary": "$106,450"
	},
	{
		"Name": "Doris Wilder",
		"Position": "Sales Assistant",
		"Office": "Sidney",
		"Age": 23,
		"Start_date": "2010 Sep 20",
		"Salary": "$85,600"
		},
	{
		"Name": "Angelica Ramos",
		"Position": "Chief Executive Officer (CEO)",
		"Office": "London",
		"Age": 47,
		"Start_date": "2009 Oct 09",
		"Salary": "$1,200,000"
	},
	{
		"Name": "Gavin Joyce",
		"Position": "Developer",
		"Office": "Edinburgh",
		"Age": 42,
		"Start_date": "2010 Dec 22",
		"Salary": "$92,575"
	},
	{
		"Name": "Jennifer Chang",
		"Position": "Regional Director",
		"Office": "Singapore",
		"Age": 28,
		"Start_date": "2010 Nov 14",
		"Salary": "$357,650"
	},
	{
		"Name": "Brenden Wagner",
		"Position": "Software Engineer",
		"Office": "San Francisco",
		"Age": 28,
		"Start_date": "2011 Jun 07",
		"Salary": "$206,850"
	},
	{
		"Name": "Fiona Green",
		"Position": "Chief Operating Officer (COO)",
		"Office": "San Francisco",
		"Age": 48,
		"Start_date": "2010 Mar 11",
		"Salary": "$850,000"
	},
	{
		"Name": "Shou Itou",
		"Position": "Regional Marketing",
		"Office": "Tokyo",
		"Age": 20,
		"Start_date": "2011 Aug 14",
		"Salary": "$163,000"
	}
]
export default {
    data() {
        return {
            showCodeState: {},
			currentPage: 1,
			pageSize: 10,
			pageSizeOptions: [5, 10, 20, 50],
        };
    },
    methods: {
        showCode(index) {
            return !!this.showCodeState[index];
        },
        toggleCode(index) {
            this.showCodeState[index] = !this.showCodeState[index];
        },
		onPageChange(page) {
			this.currentPage = page;
		},
		onPageSizeChange(size) {
			this.pageSize = Number(size);
			this.currentPage = 1;
		},
    },
	components: {
		BasePagination,
	},
  	computed: {
		filteredPages() {
			const query = this.searchQuery.toLowerCase();
			return this.data.filter((record) => {
				return (
				record.Name.toLowerCase().includes(query) ||
				record.Position.toLowerCase().includes(query) ||
				record.Office.toLowerCase().includes(query) ||
				record.Age.toLowerCase().includes(query) ||
				record.Start_date.toLowerCase().includes(query) ||
				record.Salary.toLowerCase().includes(query)
				);
			});
		},
		paginatedData() {
			const start = (this.currentPage - 1) * this.pageSize;
			return this.filteredPages.slice(start, start + this.pageSize);
		},
		totalPages() {
			return Math.ceil(this.filteredPages.length / this.pageSize) || 1;
		},
	},
	setup() {
		return {
			searchQuery: "",
			data,
			columns,
		};
	},
};
</script>
