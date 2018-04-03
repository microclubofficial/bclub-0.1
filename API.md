# Bclub Api Document
=====================

## 登录注册接口
	> 登录: 
	>> "url": "api/login"
	>> "method": "post"
	>> "data": {
		"resultcode": 1, // 结果码 [^_^]: 1代表请求成功; [>_<]: 0代表请求失败
		"message":"登录成功", // 提示信息
		"data": {}
	}

	--------------------------------------------------------------------------------
	> 注册：
	>> "url": "api/register"
	>> "method": "post"
	>> "data": {
		"resultcode": 1, // 结果码 [^_^]: 1代表请求成功; [>_<]: 0代表请求失败
		"message":"注册成功", // 提示信息
		"data": {}
	} 

	--------------------------------------------------------------------------------
	> 登出：
	>> "url": "api/logout"
	>> "method": "get"
	>> "data": {
		"resultcode": 1, // 结果码 [^_^]: 1代表请求成功; [>_<]: 0代表请求失败
		"message":"登出成功", // 提示信息
		"data": {}
	}

	--------------------------------------------------------------------------------
	> 验证码：
	>> "url": "api/captcha"
	>> "method": "get"
	>> image	//图片流

## 文章接口
	> 文章列表: 
	>> "url": "api/topic"
	>> "method": "get"
	>> "data": {
		"resultcode": 1, // 结果码 [^_^]: 1代表请求成功; [>_<]: 0代表请求失败
		"message":"所有文章", // 提示信息
		"data": {
			"classification":"All Topic"		//文章类别，例如：全部文章、精品文章
			"topics":[
					{
					"id": integer,                         // 文章ID		
					"author_id": integer,                  // 用户ID
					"author": string,                      // 用户名
					"avatar": string,                      // 用户头像url		
					"diff_time": string,                   // 发表时间距当前时间的间隔
					"created_at": string,                  // 发表时间
					"updated_at": string,                  // 更新时间
					"board_id": integer,                   // 版块ID
					"content_type": string,                // 文章分类			
					"token": string,                       // 币种
					"title": string,                       // 文章标题
					"content": string,                     // 文章内容
					"is_good": number,                     // 点赞数
					"is_bad": number,                      // 吐槽数
					"replies_count": number                // 评论数
					}，
					{},{},{}...
				]
			}
		}

	--------------------------------------------------------------------------------
	> 文章详情：
	>> "url": "api/topic/id"
	>> "method": "get"
	>> "data": {
		"resultcode": 1, // 结果码 [^_^]: 1代表请求成功; [>_<]: 0代表请求失败
		"message":"文章详情", // 提示信息
		"data": {
			"replies":["",""]                      	   // 回复内容
			"topics":{
				"id": integer,                         // 文章ID		
				"author_id": integer,                  // 用户ID
				"author": string,                      // 用户名
				"avatar": string,                      // 用户头像url		
				"created_at": string,                  // 发表时间
				"updated_at": string,                  // 更新时间
				"board_id": integer,                   // 版块ID
				"content_type": string,                // 文章分类			
				"token": string,                       // 币种
				"title": string,                       // 文章标题
				"content": string,                     // 文章内容
				"is_good": number,                     // 点赞数
				"is_bad": number,                      // 吐槽数
				"replies_count": number                // 评论数
				}
			}
		}	

	--------------------------------------------------------------------------------
	> 发表文章：
	>> "url": "api/topic"
	>> "method": "post"
	>> "data": {
		"resultcode": 1, // 结果码 [^_^]: 1代表请求成功; [>_<]: 0代表请求失败
		"message":"发表成功", // 提示信息
		"data": {
			"id": integer,                         // 文章ID		
			"author_id": integer,                  // 用户ID
			"author": string,                      // 用户名
			"avatar": string,                      // 用户头像url		
			"created_at": string,                  // 发表时间
			"updated_at": string,                  // 更新时间
			"board_id": integer,                   // 版块ID
			"content_type": string,                // 文章分类			
			"token": string,                       // 币种
			"title": string,                       // 文章标题
			"content": string,                     // 文章内容
			"is_good": number,                     // 点赞数
			"is_bad": number,                      // 吐槽数
		}
	}

## 评论接口
	> 获取评论：
	>> "url": "api/topic/replies/id"
	>> "method": "get"
	>> "data": {
		"resultcode": 1, // 结果码 [^_^]: 1代表请求成功; [>_<]: 0代表请求失败
		"message":"评论", // 提示信息
		"data": [
			{
				"id": integer,                         // 评论ID
				"author_id": integer,                  // 作者ID
				"topic_id": integer,                   // 文章ID
				"content": string,                     // 评论内容
				"update_at": string,                   // 更新时间
				"created_at": string,                  // 发表时间
				"author": string,		               // 作者
				"avatar": string,			           // 头像
				"diff_time": string			           // 发表时间与当前时间间隔
				"is_good": integer			           // 点赞数
				"is_bad": integer 			           // 吐槽数
				"question_id": integer			// 关于哪个文章的评论
			},
			{},{},{}...
		]
	}

	> 发表评论：
	>> "url": "api/topic/replies/id"
	>> "method": "post"
	>> "data": {
		"resultcode": 1, // 结果码 [^_^]: 1代表请求成功; [>_<]: 0代表请求失败
		"message":"评论成功", // 提示信息
		"data": {
			"id": integer,                         // 评论ID
			"author_id": integer,                  // 作者ID
			"topic_id": integer,                   // 文章ID
			"content": string,                     // 评论内容
			"update_at": string,                   // 更新时间
			"created_at": string,                  // 发表时间
			"author": string,			           // 作者	
			"avatar": string,			           // 头像
			"diff_time": string			           // 发表时间与当前时间间隔
			"is_good": integer			           // 点赞数
			"is_bad": integer 			           // 吐槽数
	}

## 图片接口
	> 上传图片：
	>> "url": "api/picture/id"
	>> "method": "post"
	>> "data": {
		"resultcode": 1, // 结果码 [^_^]: 1代表请求成功; [>_<]: 0代表请求失败
		"message":"上传成功", // 提示信息
		"data": {
			"front_photo":string,				//前端传出的图片
			"photo_path":string,				//储存图片的路径
			}
	}

## 社区接口
	> bar列表：
	>> "url": "api/bar"
	>> "method": "get"
	>> "data": {
		"resultcode": 1, // 结果码 [^_^]: 1代表请求成功; [>_<]: 0代表请求失败
		"message":"bar列表", // 提示信息
		"data": [
			{
				"id": integer,                  // 评论ID
				"author_id": integer,           // 作者ID
				"author": string			    // bar的创建者
				"picture": string			    // 图片
				"title": string				    // 标题
				"subtitle": sting			    // 副标题
				
			},
			{},{},{}...
		]
	}

	> bar主题列表：
	>> "url": "api/bar/questions/id"
	>> "method": "get"
	>> "data": {
		"resultcode": 1, // 结果码 [^_^]: 1代表请求成功; [>_<]: 0代表请求失败
		"message":"bar问题列表", // 提示信息
		"data": {
			"id": integer,                       // 评论ID
			"author_id": integer,                // 作者ID
			"content": string,                   // 评论内容
			"update_at": string,                 // 更新时间
			"created_at": string,                // 发表时间
			"author": string,			         // 作者
			"diff_time": string			         // 发表时间与当前时间间隔
			"is_good": integer			         // 点赞数
			"is_bad": integer 			         // 吐槽数
			"question_id": integer			     // 关于哪个文章的评论
			"is_bar": integer			         // 0为谈论中的提问，1为bar中的提问
			"avatar": string,			         // 头像
			"bar_id": integer,                   // barID
			"content_type": string,              // 文章分类
			"replies_count": integer,		     // 评论数
			"title": string				         // 标题
			},
			{},{},{}...
	}
	
	> bar主题详情页：
	>> "url": "api/bar/answers/id"
	>> "method": "get"
	>> "data": {
		"resultcode": 1, // 结果码 [^_^]: 1代表请求成功; [>_<]: 0代表请求失败
		"message":"bar问题详情页", // 提示信息
		"data": {
			question:{
				"id": integer,                    // 评论ID
				"author_id": integer,             // 作者ID
				"content": string,                // 评论内容
				"update_at": string,              // 更新时间
				"created_at": string,             // 发表时间
				"author": string,			      // 作者
				"diff_time": string			      // 发表时间与当前时间间隔
				"is_good": integer			      // 点赞数
				"is_bad": integer 			      // 吐槽数
				"is_bar": integer			      // 0为谈论中的提问，1为bar中的提问
				"avatar": string,			      // 头像
				"bar_id": integer,                // barID
				"content_type": string,           // 文章分类
				"title": string				      // 标题
			}
			answers:[
			{
				"id": integer,                    // 回答ID
				"author": string,			      // 作者
				"author_id": integer,             // 作者ID
				"avatar": string,			      // 头像
				"is_good": integer			      // 点赞数
				"is_bad": integer 			      // 吐槽数
				"is_bar": integer			      // 0为谈论中的提问，1为bar中的提问
				"content": string,                // 回答内容
				"update_at": string,              // 更新时间
				"created_at": string,             // 发表时间
				"diff_time": string			      // 发表时间与当前时间间隔
				"question_id": integer,           // 回答ID
				"comment"[				          // 回答下面的评论
				{
					"id": integer,                // 评论ID
					"author_id": integer,         // 作者ID
					"answer_id": integer,         // 评论ID
					"content": string,            // 评论内容
					"update_at": string,          // 更新时间
					"created_at": string,         // 发表时间
					"author": string,		      // 作者
					"is_good": integer		      // 点赞数
					"is_bad": integer 		      // 吐槽数
					"diff_time": string		      // 发表时间与当前时间间隔
				},
				{},{},{}...
			],
		}
		],
}

	> bar获取评论：
	>> "url": "api/bar/replies/id"
	>> "method": "get"
	>> "data": {
		"resultcode": 1, // 结果码 [^_^]: 1代表请求成功; [>_<]: 0代表请求失败
		"message":"评论信息", // 提示信息
		"data": [
			{
				"id": integer,                       // 评论ID
				"author_id": integer,                // 作者ID
				"topic_id": integer,                 // 文章ID
				"content": string,                   // 评论内容
				"update_at": string,                 // 更新时间
				"created_at": string,                // 发表时间
				"author": string,		             // 作者
				"avatar": string,			         // 头像
				"diff_time": string			         // 发表时间与当前时间间隔
				"is_good": integer			         // 点赞数
				"is_bad": integer 			         // 吐槽数
				"question_id": integer			     // 关于哪个文章的评论
				"is_reply": integer			         // 0为回答，1为评论
			},
			{},{},{}...
		]
	}

	> bar发表评论：
	>> "url": "api/bar/replies/id"
	>> "method": "post"
	>> "data": {
		"resultcode": 1, // 结果码 [^_^]: 1代表请求成功; [>_<]: 0代表请求失败
		"message":"评论成功", // 提示信息
		"data": {
			"id": integer,                            // 评论ID
			"author_id": integer,                     // 作者ID
			"topic_id": integer,                      // 文章ID
			"content": string,                        // 评论内容
			"update_at": string,                      // 更新时间
			"created_at": string,                     // 发表时间
			"author": string,			              // 作者
			"diff_time": string			              // 发表时间与当前时间间隔
			"is_good": integer			              // 点赞数
			"is_bad": integer 			              // 吐槽数
			"question_id": integer			          // 关于哪个文章的评论
			"is_Reply": integer			              // 0为回答，1为评论
	}


> bar回复评论：
测试test

































