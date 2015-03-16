

(function(module){  
   'use strict';          // （2） Strictモードを指定する

    module.controller('pageController',function($scope){   // （3） コントローラを作成

        // （4） 表示する要素の管理
        $scope.show = {
            list : true,
            add  : false,
            info : false
        };
    });
    
      // 一覧を表示する為のコントローラの作成
    module.controller('listController',function($scope){
        $scope.items = [
            {
                title: 'お買い物リスト',
                memo : '大根と豆腐を買ってくる'
            },
            {
                title: '通帳記入をする',
                memo : 'XX銀行の貯金通帳に記入する'
            }
        ];
    });
    
    
    
    }(TodoModule)); 
