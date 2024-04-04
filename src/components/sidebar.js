

export default function Sidebar() {
    return (
        <div class="flex flex-row">
            <div class="flex flex-col items-start w-[280px] h-screen">
                <div class="pt-[20px]">
                    <button class="flex flex-row justify-start items-center text-gray-600 hover:bg-red-400 w-[240px] h-[45px] ml-[15px] pl-[15px] rounded-[13px] text-left text-lg">
                        <img src="images/inactiveTrainingLogs.png" class="h-6 pr-[20px]"></img>
                        Training logs
                    </button>
                    <button class="flex flex-row justify-start items-center text-gray-600 hover:bg-red-400 w-[240px] h-[45px] ml-[15px] pl-[15px] rounded-[13px] text-left text-lg">
                        <img src="images/inactiveAnimalLogo.png" class="h-6 pr-[20px]"></img>
                        Animals
                    </button>
                    <hr class="bg-gray-300 text-gray-600 w-[250px] h-[2px] mt-[17px] ml-[15px] "></hr>
                    <p class="mt-[10px] ml-[30px] mb-[8px] font-medium text-lg">
                        Admin access
                    </p>
                    <button class="flex flex-row justify-start items-center text-gray-600 hover:bg-red-400 w-[240px] h-[45px] ml-[15px] pl-[15px] rounded-[13px] text-left text-lg">
                        <img src="images/inactiveAllTrainingLogo.png" class="h-6 pr-[20px]"></img>
                        All training
                    </button>
                    <button class="flex flex-row justify-start items-center text-gray-600 hover:bg-red-400 w-[240px] h-[45px] ml-[15px] pl-[15px] rounded-[13px] text-left text-lg">
                        <img src="images/inactiveAllAnimalsLogo.png" class="h-6 pr-[20px]"></img>
                        All animals
                    </button>
                    <button class="flex flex-row justify-start items-center text-gray-600 hover:bg-red-400 w-[240px] h-[45px] ml-[15px] pl-[15px] rounded-[13px] text-left text-lg">
                        <img src="images/inactiveAllUsersLogo.png" class="h-6 pr-[20px]"></img>
                        All users
                    </button>
                </div>
                <div class="flex-col fixed bottom-5 h-[60px]">
                    <hr class="bg-gray-300 w-[250px] h-[2px] mt-[17px] ml-[15px]"></hr>
                    <div class="flex flex-row justify-between items-center mt-[5px] mb-[10px]">
                        <div class="flex flex-row justify-center items-center">
                            <div class="flex flex-row justify-center items-center bg-red-500 w-[40px] h-[40px] font-bold text-lg rounded-[50px] ml-[20px] mr-[15px] text-white">
                                L
                            </div>
                            <div class="flex flex-col text-gray-600">
                                <p class="font-bold">
                                    Long Lam
                                </p>
                                <p class="font-normal text-gray-600">
                                    Admin
                                </p>
                            </div>
                        </div>
                        <div class="bg-blue-00 w-[50px]">
                            <button class="bg-green-00 w-[40px] h-[35px] pl-[10px] ml-[10px]">
                                <img src="images/logoutLogo.png" class="h-6"></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-[1px] h-screen">
                <hr class="bg-gray-300 w-[1px] h-screen"></hr>
            </div>
        </div>
    );
}